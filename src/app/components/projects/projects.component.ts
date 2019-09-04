import {Component, OnInit} from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {Project} from './project.class';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.pug',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];
  private projectCollection: Project[] = [
    {
      image: 'src="../../assets/img/mdlinks.png',
      title: 'Markdown Links',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      urlDemo: 'https://www.npmjs.com/package/@jocecasteletti/md-links',
      urlRepo: 'https://nic.cl'
    },{
      image: 'src="../../assets/img/otrasmiradas.png',
      title: 'Fundación Otras Miradas',
      description: 'Aplicación para leer links en archivos Markdown.',
      urlDemo: 'https://otrasmiradas01.firebaseapp.com/home',
      urlRepo: 'https://nic.cl'
    },
    {
      image: 'src="../../assets/img/maps.png',
      title: 'Proyecto Maps',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      urlDemo: 'https://favorites-maps.firebaseapp.com/',
      urlRepo: 'https://nic.cl'
    },
    {
      image: 'src="../../assets/img/burgerqueen.png',
      title: 'Proyecto Burger Queen',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      urlDemo: 'https://scl009-burger-queen.firebaseapp.com/',
      urlRepo: 'https://nic.cl'
    }, {
      image: 'src="../../assets/img/infopokemon.png',
      title: 'Info Pokemon',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      urlDemo: 'https://jocecasteletti.github.io/SCL009-data-lovers/src/index.html',
      urlRepo: 'https://nic.cl'
    }, {
      image: 'src="../../assets/img/redsocial.png',
      title: 'Red social Viajeros Chilenos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      urlDemo: 'https://majomarquez.github.io/SCL009-Social-Network/src/index.html#/home',
      urlRepo: 'https://nic.cl'
    },
  ];

  constructor() {
  }

  ngOnInit() {
    this.projectCollection.forEach((item, index) => {
      setTimeout(() => {
        this.projects.push(item);
      }, index * 500);
    });
  }

}
