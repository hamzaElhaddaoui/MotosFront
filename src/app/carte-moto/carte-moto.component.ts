import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-carte-moto',
  templateUrl: './carte-moto.component.html',
  styleUrls: ['./carte-moto.component.css']
})
export class CarteMotoComponent implements OnInit,OnChanges {
  @Input()
  public moto:any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.moto.descResumer=this.moto.description.substring(0,190)+"...";
  }



}
