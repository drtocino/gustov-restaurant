import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logged : boolean = false;

  title = 'gustov-restaurant';

  onLog(eventData : any){
    console.log(eventData)
    this.logged = eventData
  }
}
