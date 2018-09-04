import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Native, None
})
export class ServerElementComponent implements OnInit,  OnChanges {

  // defining a type
  @Input('srvElement') element: { type: string, name: string, content: string, location: string, os: string};
  @Input() osName;

  constructor() { 
    console.log('constructor called!')
  }

  ngOnInit() {
    console.log('ngOnInit called!')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes)
  }

}
