import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-moto-info',
  templateUrl: './moto-info.component.html',
  styleUrls: ['./moto-info.component.css']
})
export class MotoInfoComponent implements OnInit {

  public idMoto: any;
  public moto: any;
  public modelSimilaire: any;
  public dataLoaded:Boolean;
  private baseLink:string = "http://localhost:8080"
  //private baseLink:string="http://apimotos.westeurope.azurecontainer.io";

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    route.params.subscribe(val => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.dataLoaded=false;
    this.idMoto = this.route.snapshot.paramMap.get('id');
    let link: any = this.baseLink+"/motos/" + this.idMoto;
    this.http.get(link).subscribe(data => {
      this.moto = data;
      if (this.moto.finfabrication == "0") {
        this.moto.finfabrication = "Present";
      }
      this.http.get(this.baseLink+"/motosModel/" + this.moto.model.id).subscribe(
        data => {
          this.modelSimilaire = data;
          this.dataLoaded=true;
          if(this.modelSimilaire!=null){
            this.modelSimilaire.forEach(element => {
              element.link = "/moto/"+element.id;
              element.notLast=true;
              if(element.finfabrication==0){
                element.finfabrication="Present";
              }            
            });
            this.modelSimilaire[this.modelSimilaire.length-1].notLast=false;
          }
          
        }
      )
    });
  }

}
