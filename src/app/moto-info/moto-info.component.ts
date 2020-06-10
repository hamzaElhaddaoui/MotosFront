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

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.idMoto = this.route.snapshot.paramMap.get('id');
    let link: any = "http://localhost/motos/" + this.idMoto;
    this.http.get(link).subscribe(data => {
      this.moto = data;
      if (this.moto.finfabrication == "0") {
        this.moto.finfabrication = "Present";
      }
      this.http.get("http://localhost/motosModel/" + this.moto.model.id).subscribe(
        data => {
          this.modelSimilaire = data;
          this.modelSimilaire.forEach(element => {
            element.link = "/moto/"+element.id;            
          });
          console.log(data);
        }
      )
    });

  }

}
