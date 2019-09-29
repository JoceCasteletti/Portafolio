import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.pug',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  hol: string[] = ['hola', `chao`, `ciao`]

  constructor() { }

  ngOnInit() {
  }

}
