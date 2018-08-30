import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppComponent';
  disabled = true;
  text = "";
  clicked = false;
  //textButton = "Oprimeme joder!!!";
  textButton = "Click!!!";
  numbers =  [1, 2, 3, 4];

  onInputUpdate(){
    //this.text = (<HTMLInputElement>event.target).value;
    this.disabled = this.text.length <= 0;
  }

  onClickButton(){
    this.text = "";
    this.onInputUpdate();
    //this.clicked = !this.clicked;    
    //this.textButton = this.clicked ? 'Desomprime Ome' : "Oprimeme joder!!!";
  }
}