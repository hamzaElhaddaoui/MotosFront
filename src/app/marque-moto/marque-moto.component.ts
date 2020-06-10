import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-marque-moto',
  templateUrl: './marque-moto.component.html',
  styleUrls: ['./marque-moto.component.css']
})
export class MarqueMotoComponent implements OnInit,OnChanges {

  @Output() marquesSelectioner:EventEmitter<number>= new EventEmitter<number>();
  @Output() marquesFermer:EventEmitter<any> = new EventEmitter();

  @Input() isMarqueClicked:boolean;
  public marques:any;
  public currentMarque:any;
  private link:string = 
  // "http://apimotos.westeurope.azurecontainer.io/marques";
  "http://localhost/marques";
  constructor(private http:HttpClient) { }

  ngOnChanges(){
    console.log(this.isMarqueClicked);
  }

  ngOnInit() {
    //configurer le header de la requete
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJIYW16YSIsImV4cCI6MTU4NjQxMTkwNSwiaWF0IjoxNTg2Mzc1OTA1fQ.w5DatAOnj8KPvD5kcJlf2w_3GS-t6pn9-uv_AudYdls'
    //   })
    // };

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJIYW16YSIsImV4cCI6MTU4NjQxMTkwNSwiaWF0IjoxNTg2Mzc1OTA1fQ.w5DatAOnj8KPvD5kcJlf2w_3GS-t6pn9-uv_AudYdls');
    // headers = headers.append('zumo-api-version', '2.0.0');
    //get marques from api
    console.log("fetching for data");
    this.http.get(this.link)
    .subscribe((data)=>{this.marques=data;
                        console.log(this.marques)},
    err => {console.log(err)})
  }

  marqueClique(marque:any){
    this.marquesSelectioner.emit(marque.id);
    this.currentMarque=marque;
  }
  fermerMarque(){
    this.marquesFermer.emit();
    
  }
}
