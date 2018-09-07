import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Test Server', content: 'Just a test?', location: 'Canada', os: 'Linux' }];

  onServerAdded(serverData: { serverName: string, serverContent: string, serverLocation: string, os: string}) {
    this.serverElements.push({
       type: 'server',
       name: serverData.serverName,
       content: serverData.serverContent,
       location: serverData.serverLocation,
       os: serverData.os
     });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string, serverLocation: string, os: string}) {
    this.serverElements.push({
       type: 'blueprint',
       name: blueprintData.serverName,
       content: blueprintData.serverContent,
       location: blueprintData.serverLocation,
       os: blueprintData.os
     });
  }

  onChangeOS() {
    this.serverElements[0].os = 'Windows 10'
  }

}
