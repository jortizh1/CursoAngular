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
  textButton = "Oprimeme joder!!!";

  onInputUpdate(event: Event){
    this.text = (<HTMLInputElement>event.target).value;
    this.disabled = this.text.length <= 0;
  }

  onClickButton(){
    this.clicked = !this.clicked;
    this.textButton = this.clicked ? 'Desomprime Ome' : "Oprimeme joder!!!";
  }
}