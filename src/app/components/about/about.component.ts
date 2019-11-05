import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.pug',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  like: string[] = ['Javascript', `Angular`, `NodeJs`, `Cantar`, `Viajar`,]

  constructor() { }

  ngOnInit() {
  }

}
