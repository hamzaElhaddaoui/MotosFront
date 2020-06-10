import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloadskel',
  templateUrl: './preloadskel.component.html',
  styleUrls: ['./preloadskel.component.css']
})
export class PreloadskelComponent implements OnInit {
  public skels:any=[{},{},{},{},{},{}];
  constructor() { }

  ngOnInit() {
  }

}
