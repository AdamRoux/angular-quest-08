import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quest8';

  onomatopoeias : string[] | undefined = []
  onReceiveNewOnomatopia($event: any){
    this.onomatopoeias?.push($event)
  }
}
