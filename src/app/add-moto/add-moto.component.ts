import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-add-moto',
  templateUrl: './add-moto.component.html',
  styleUrls: ['./add-moto.component.css']
})
export class AddMotoComponent implements OnInit {

  formgroup: FormGroup;
  submitted:boolean = false;
  private link:string = "http://localhost:8080/marques";
  private linkModels:string = "http://localhost:8080/models/marque/";
  private linkCategories:string = "http://localhost:8080/categories";
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Credentials':'true',
    'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
    'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS'
    })
   };
  public marques:any;
  public models:any;
  public categories:any;
  public token:any;

  constructor(private formBuilder:FormBuilder, private http:HttpClient) { }

  ngOnInit() {
    this.formgroup = this.formBuilder.group({
      marque: ['', Validators.required],
      model:['', Validators.required],
      nom: ['', Validators.required],
      categorie: ['', Validators.required],
      imageLink: ['', Validators.required],
      puissance: ['', Validators.required],
      couple: ['', Validators.required],
      poid: ['', Validators.required],
      rapport: ['', Validators.required],
      cylindre: ['', Validators.required],
      datedebutprod: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      datefinprod: ['', [Validators.minLength(4), Validators.maxLength(4)]],
      motorType: ['', Validators.required],
      description: ['']
    });

    // autehtification
    this.http.post("/api/authentification", JSON.stringify({username: "Hamza",password : "Hello"}),
    this.httpOptions).subscribe(data => { this.token=data; 
      this.httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials':'true',
        'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
        'Authorization' : 'Bearer '+this.token.jwt
        })
       };
    }, err => console.log(err));

    // fetching marques
    console.log("fetching for marques");
    this.http.get(this.link)
    .subscribe((data)=>{this.marques=data;
        console.log(data);
      },
    err => {console.log(err)})

    this.formgroup.controls['marque'].valueChanges.subscribe(x => {
      // fetch data from server of models
      this.fetchingModels(x);
    });

    // fetching categories
    console.log("fetching for categories");
    this.http.get(this.linkCategories)
    .subscribe((data)=>{this.categories=data;
        console.log(data);
      },
    err => {console.log(err)})

    //this.httpOptions.headers.set("Authorization","Bearer "+this.token);
    //console.log(this.httpOptions);
  }

  fetchingModels(id:number){
    // fetching models
    console.log("fetching for models");
    this.http.get(this.linkModels+id)
    .subscribe((data)=>{
      this.models=data;
    console.log(this.models);
    },
    err => {console.log(err)})
  }

  // convenience getter for easy access to form fields
  get f() { return this.formgroup.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.httpOptions)
    // stop here if form is invalid
    if (this.formgroup.invalid) {
        return;
    }

    let moto = { nom:this.formgroup.controls['nom'].value,
                 description:this.formgroup.controls['description'].value,
                 lien : this.formgroup.controls['imageLink'].value,
                 categorie : this.formgroup.controls['categorie'].value,
                 puissance : this.formgroup.controls['puissance'].value,
                 couple : this.formgroup.controls['couple'].value,
                 typemoteur : this.formgroup.controls['motorType'].value,
                 rapports : this.formgroup.controls['rapport'].value,
                 cylindres : this.formgroup.controls['cylindre'].value,
                 poids : this.formgroup.controls['poid'].value,
                 debutfabrication : this.formgroup.controls['datedebutprod'].value,
                 finfabrication : this.formgroup.controls['datefinprod'].value,
                 model :this.formgroup.controls['model'].value
                }

    console.log(moto);

    // ajoute d'une moto

    this.http.post("/api/motos",JSON.stringify(moto),this.httpOptions)
        .subscribe((data)=>{
          console.log(data);
          alert('SUCCESS!! :-)');
        },
        err => {console.log(err)});
}

}
