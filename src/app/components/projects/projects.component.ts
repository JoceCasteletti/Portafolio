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
      description: 'Librería para extraer los enlaces de directorios y/o archivos markdown (.md), validar su status. Fue desarrollada usando Node.js.',
      urlDemo: 'https://www.npmjs.com/package/@jocecasteletti/md-links',
      urlRepo: 'https://github.com/JoceCasteletti/SCL009-md-links'
    },{
      image: 'src="../../assets/img/otrasmiradas.png',
      title: 'Fundación Otras Miradas',
      description: 'Página web diseñada para usuarios reales de la fundación Otras Miradas. Fué desarrollada usando Angular , Firebase y Bootrstap.',
      urlDemo: 'https://otrasmiradas01.firebaseapp.com/home',
      urlRepo: 'https://github.com/JoceCasteletti/SCL009-Otras-Miradas'
    },
    {
      image: 'src="../../assets/img/maps.png',
      title: 'Proyecto Maps',
      description: 'Aplicación que permite visualizar mapa de Google Maps con tiendas de México. Además, es posible agregar stores a favoritos y eliminarlos. Fué desarrollado usando Javascript, Angular y consumo de la api de Google Maps.',
      urlDemo: 'https://favorites-maps.firebaseapp.com/',
      urlRepo: 'https://github.com/JoceCasteletti/SCL009-Desafio-Maps'
    },
    {
      image: 'src="../../assets/img/burgerqueen.png',
      title: 'Proyecto Burger Queen',
      description: 'Aplicación desarrollada para ser usada en Tablet, permite a los trabajadores de esta cadena de comida almacenar los pedidos de los clientes. Fué desarrollado usando Angular, Bootstrap y Firebase para almacenar los pedidos realizados.',
      urlDemo: 'https://scl009-burger-queen.firebaseapp.com/',
      urlRepo: 'https://github.com/JoceCasteletti/SCL009-Burger-Queen/tree/develop'
    }, {
      image: 'src="../../assets/img/infopokemon.png',
      title: 'Info Pokemon',
      description: 'Trabajo realizado con información de data Pokémon de la región de Kanto, permitiendo al usuario realizar diversos filtros. Fué desarrollada usando Javascript y también se utilizó Bootstrap.',
      urlDemo: 'https://jocecasteletti.github.io/SCL009-data-lovers/src/index.html',
      urlRepo: 'https://github.com/JoceCasteletti/SCL009-data-lovers'
    }, {
      image: 'src="../../assets/img/redsocial.png',
      title: 'Red social Viajeros Chilenos',
      description: 'Red social que permite que los viajeros puedan encontrar un dato de utilidad para sus viajes. Fué desarrolla usando Javascript, Bootstrap y Firebase para realizar la autentificación de usuarios.',
      urlDemo: 'https://majomarquez.github.io/SCL009-Social-Network/src/index.html#/home',
      urlRepo: 'https://github.com/JoceCasteletti/SCL009-Social-Network'
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
