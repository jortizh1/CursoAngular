import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

  @Input() element:{type:string, name:string, content:string}
  constructor() { }

  ngOnInit() {
  }

}