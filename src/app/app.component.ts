import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Captain America';
  name2: string = 'dAniEl LiMAs';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  percent: number = 0.234;
  wage: number = 1234.5;
  today: Date = new Date();
  password: string = 'p12345';
  activate: boolean = true;
  language: string;
  video: string = 'https://www.youtube.com/embed/yfGneH5g9ZM';

  hero = {
    name: 'Logan',
    codename: 'Wolverine',
    age: '513',
    address: {
      street: 'Salvation',
      number: 18,
    },
  };

  promisedValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Data has arrived!');
    }, 3500);
  });
}
