import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  private mot:string="";
  @Input() public search:boolean;
  @Output() private itemToSearch:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  chercheurTape(event:any){
    if(this.mot!=event.target.value){
      
      setTimeout( () => { this.mot=event.target.value; this.itemToSearch.emit(this.mot);} , 500)
    }
  }

}
