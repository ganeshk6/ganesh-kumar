import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Content Writing Project',
      name: 'Textflo',
      link: 'https://textflo.com/',
      technologies: 'Front-End, PHP, MySql',
      description: [
        'Worked on PHP and MySql Database in team',
        'This is a content writing project',
        'In this project having two part, Admin and Clint'
      ],
    },
    {
      title: 'Hotel and Pro-Perties',
      name: 'Panpeninsula Properties',      
      link: 'http://panpeninsulaproperties.com/',
      technologies: 'WordPress',
      description: [
        'Worked on Wordpress',
        'Customers are Sell and Buy the properties by this project'
      ],
    },
    {
      title: 'Taxi like OLA',
      name: 'BulBul-Taxi',      
      link: 'Not Live',
      technologies: 'Laravel API',
      description: [
        'Worked on Laravel API',
        'This project as like OLA and Uber',
        'Customer, Driver and Admin having three part'
      ],
    },
  ];
  constructor() {};
  ngOnInit(): void {}

}
