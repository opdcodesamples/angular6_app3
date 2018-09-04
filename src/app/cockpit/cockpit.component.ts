import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string, serverLocation: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string, serverLocation: string}>();
  
  //newServerName = '';
  newServerContent = '';
  //newServerLocation = '';
  @ViewChild('serverLocationInput') serverLocationInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    //console.log(serverNameInput) // local reference gives us the element
    //console.log(serverNameInput.value) // local reference value
    console.log(this.serverLocationInput) // 
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent,
      serverLocation: this.serverLocationInput.nativeElement.value
    })
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent,
      serverLocation: this.serverLocationInput.nativeElement.value
    })
  }

}
