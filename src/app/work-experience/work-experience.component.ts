import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{
  workExpList: WorkExperience[] = [
    {
      role: 'Web Developer',
      company: 'HACHIWEB, Value drives technologists',
      duration: 'june 30, 2022 Sep 30, 2022',
      description: [
        'Worked with multiple teams to develop web site and web applications',
        'Worked on different technologies such as (Laravel, PHP, WordPress etc)'
      ]
    },
  ];
  constructor() {}
  ngOnInit(): void {}

}
