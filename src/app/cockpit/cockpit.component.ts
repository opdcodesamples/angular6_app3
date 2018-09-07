import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string, serverLocation: string, os: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string, serverLocation: string, os: string}>();
  
  //newServerName = '';
  newServerContent = '';
  //newServerLocation = '';
  @ViewChild('serverLocationInputLocalReference') serverLocationInputLocalReference: ElementRef;
  os = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInputLocalReference: HTMLInputElement) {
    console.log('serverNameInputLocalReference ===> ')
    console.log(serverNameInputLocalReference) // local reference gives us the element
    console.log('serverNameInputLocalReference.value ===> ') 
    console.log(serverNameInputLocalReference.value) // local reference value
    console.log('this.serverLocationInputLocalReference ===> ')
    console.log(this.serverLocationInputLocalReference) // 
    console.log('this.serverLocationInputLocalReference.nativeElement ===> ')
    console.log(this.serverLocationInputLocalReference.nativeElement) // 
    console.log('this.serverLocationInputLocalReference.nativeElement.value ===> ')
    console.log(this.serverLocationInputLocalReference.nativeElement.value) // 

    this.serverCreated.emit({
      serverName: serverNameInputLocalReference.value,
      serverContent: this.newServerContent,
      serverLocation: this.serverLocationInputLocalReference.nativeElement.value,
      os: this.os
    })
  }

  onAddBlueprint(serverNameInputLocalReference: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInputLocalReference.value,
      serverContent: this.newServerContent,
      serverLocation: this.serverLocationInputLocalReference.nativeElement.value,
      os: this.os
    })
  }

}
