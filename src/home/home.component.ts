import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  monk: string;
  constructor() {
  this.monk = 'https://i.pinimg.com/736x/81/8a/cb/818acbdebba3a876d99830888d26c23a--memes-expressions.jpg';
  }

  ngOnInit() {
  }

}
