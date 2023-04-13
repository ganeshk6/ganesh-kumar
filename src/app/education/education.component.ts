import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Dev Bhoomi Uttarakhand University',
      course: 'BCA',
      duration: '2021-2024',
      score: 'Going on',
    },{
      institute: 'K.S.T Collage, Bihar Sharif',
      course: 'Intermediate',
      duration: '2019-2021',
      score: '67.2%',
    },
    {
      institute: 'Nalanda Collagiate +2 high school',
      course: 'Matric',
      duration: '2018-2019',
      score: '88.2%',
    },
  ];

  constructor() {}
  ngOnInit(): void {}

}
