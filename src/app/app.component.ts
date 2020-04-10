import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Moto info';
  private isEnableMarque: boolean = false;
  private acctualIdMarque: number;
  private link: string = "http://localhost:8080/motos/"
  private randomMotos: any;
  private actualiser: boolean = true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.link + "index")
      .subscribe(data => { this.randomMotos = data })
  }

  marqueClique(idMarque: number) {
    this.acctualIdMarque=idMarque;
    this.http.get(this.link + "marques/" + idMarque)
      .subscribe(data => { this.randomMotos = data; this.isEnableMarque = true; })
  }

  marqueFermer() {
    this.http.get(this.link + "index")
      .subscribe(data => { this.randomMotos = data })
    this.isEnableMarque = false;
  }

  lancerUneRecherche(mot: string) {
    this.isEnableMarque = false;
    if (mot == "") {
      this.actualiser = true;
      this.http.get(this.link + "index")
        .subscribe(data => { this.randomMotos = data })
    } else {
      this.actualiser = false;
      this.http.get(this.link + "recherche/" + mot).subscribe(data => { this.randomMotos = data });
    }
  }
  actualiserContenue() {
    if (this.isEnableMarque) {
      this.http.get(this.link + "marques/" +this.acctualIdMarque)
        .subscribe(data => { this.randomMotos = data; this.isEnableMarque = true; })
    } else {
      this.http.get(this.link + "index")
        .subscribe(data => { this.randomMotos = data })
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
