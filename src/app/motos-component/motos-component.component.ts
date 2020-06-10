import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-motos-component',
  templateUrl: './motos-component.component.html',
  styleUrls: ['./motos-component.component.css']
})
export class MotosComponentComponent implements OnInit {

  public isEnableMarque: boolean = false;
  private acctualIdMarque: number;
  private link: string ="http://localhost/motos/";
  // private link: string = "http://apimotos.westeurope.azurecontainer.io/motos/";
  public randomMotos: any;
  public actualiser: boolean = true;
  public isLoadedInformation: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.link + "index")
      .subscribe(data => { this.randomMotos = data; this.isLoadedInformation=true; })
  }

  marqueClique(idMarque: number) {
    this.isLoadedInformation=false;
    this.acctualIdMarque=idMarque;
    this.http.get(this.link + "marques/" + idMarque)
      .subscribe(data => { this.randomMotos = data; this.isEnableMarque = true; this.isLoadedInformation=true;})
  }

  marqueFermer() {
    this.isLoadedInformation=false;
    this.http.get(this.link + "index")
      .subscribe(data => { this.randomMotos = data; this.isLoadedInformation=true; })
    this.isEnableMarque = false;
  }

  lancerUneRecherche(mot: string) {
    this.isEnableMarque = false;
    this.isLoadedInformation = false;
    if (mot == "") {
      this.actualiser = true;
      this.http.get(this.link + "index")
        .subscribe(data => { this.randomMotos = data ; this.isLoadedInformation=true;})
    } else {
      this.actualiser = false;
      this.http.get(this.link + "recherche/" + mot).subscribe(data => { this.randomMotos = data; this.isLoadedInformation=true;});
    }
  }
  
  actualiserContenue() {
    this.isLoadedInformation=false;
    if (this.isEnableMarque) {
      this.http.get(this.link + "marques/" +this.acctualIdMarque)
        .subscribe(data => { this.randomMotos = data; this.isEnableMarque = true; this.isLoadedInformation=true;})
    } else {
      this.http.get(this.link + "index")
        .subscribe(data => { this.randomMotos = data; this.isLoadedInformation=true;})
    }
  }

  gotToTop(){
    var newPos = window.pageYOffset/20;
    let scrollToTop = window.setInterval(() => {
      var pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - newPos); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 1);
  }

}
