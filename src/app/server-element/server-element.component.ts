import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Native, None
})
export class ServerElementComponent implements OnInit {

  // defining a type
  @Input('srvElement') element: { type: string, name: string, content: string, location: string};

  constructor() { }

  ngOnInit() {
  }

}
