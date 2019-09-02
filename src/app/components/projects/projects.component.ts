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
      image: 'https://dummyimage.com/720x480/000/046599',
      title: 'Proyecto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      urlDemo: 'https://nic.cl',
      urlRepo: 'https://nic.cl'
    }, {
      image: 'https://dummyimage.com/720x480/886637/046599',
      title: 'MD Links',
      description: 'Aplicación para leer links en archivos Markdown.',
      urlDemo: 'https://nic.cl',
      urlRepo: 'https://nic.cl'
    }, {
      image: 'https://dummyimage.com/720x480/886637/046599',
      title: 'Proyecto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      urlDemo: 'https://nic.cl',
      urlRepo: 'https://nic.cl'
    }, {
      image: 'https://dummyimage.com/720x480/886637/046599',
      title: 'Proyecto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      urlDemo: 'https://nic.cl',
      urlRepo: 'https://nic.cl'
    }, {
      image: 'https://dummyimage.com/720x480/886637/046599',
      title: 'Proyecto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      urlDemo: 'https://nic.cl',
      urlRepo: 'https://nic.cl'
    }, {
      image: 'https://dummyimage.com/720x480/886637/fff',
      title: 'Proyecto 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
      urlDemo: 'https://nic.cl',
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
