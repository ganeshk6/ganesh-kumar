import { Component, OnInit } from '@angular/core';
import{ BreakpointObserver } from '@angular/cdk/layout';
// import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver){}

  ngOnInit(): void {
    
  }

}
