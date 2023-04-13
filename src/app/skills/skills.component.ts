import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material, CLI',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Node.js, PHP, WordPress',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'MongoDB, MySql, SQL',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'JAVA, DSA',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'C, Python',
      level: 'Expert',
      rating: 85,
    },
  ];
  constructor() {}
  ngOnInit(): void {}

}
