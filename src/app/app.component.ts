import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  currName = '';
  currSurname = '';
  currAge: number;
  currCountry = '';
  currPrice: number;
  players = [];

  addPlayer() {
    console.log('ciabaraba');
    this.players.push({'name': this.currName, 'surname': this.currSurname,
                       'age': this.currAge, 'country': this.currCountry, 'price': this.currPrice});
    console.log(this.players.length)
    this.currName = '';
    this.currSurname = '';
    this.currAge = null;
    this.currCountry = '';
    this.currPrice = null;
  }

  sanitizeAge(event) {
    console.log(event.target);
    if (isNaN(event.target.value) || event.target.value === null || event.target.value == '') {
      console.log('hejo');
      console.log(event.target.defaultValue);
      this.currAge = event.target.defaultValue;
      event.target.value = event.target.defaultValue;
      console.log(this.currAge);
    } else {
      this.currAge = event.target.value;
      console.log(this.currAge);
    }
  }

  sanitizePrice(event) {
   console.log(event.target);
   if (isNaN(event.target.value) || event.target.value === null || event.target.value == '') {
      console.log('hejo');
      console.log(event.target.defaultValue);
      this.currPrice = event.target.defaultValue;
      event.target.value = event.target.defaultValue;
      console.log(this.currPrice);
    } else {
      this.currPrice = event.target.value;
      console.log(this.currPrice);
      console.log(isNaN(this.currPrice));
    }
  }

  checkIfReady() {
    if(this.currName === '' || this.currSurname === '' || this.currCountry === '' ||
    isNaN(this.currAge) || isNaN(this.currPrice) || this.currAge === null || this.currPrice === null) {
      return false;
    } else {
      return true;
    }
  }
}
