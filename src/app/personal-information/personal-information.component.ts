import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{

  myData: string[][] = [
    ['Name', 'Ganesh Kumar'],
    ['DOB', '02/12/2004'],
    ['Work Exp', '6 Month Intership'],
    ['Education', 'BCA(2024)'],
    ['Interest', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 6 months Exprience in software industry.',
    'Hi, I am Ganesh Kumar pursing BCA from Dev Bhoomi Uttrakhand University.',
    'Hi, I am Working in MEAN Stack.',
    'Hi, I am doing 3 months intership fron HachiWeb, Dehraden.',

  ];
  constructor() {}

  ngOnInit(): void {
  }

}
