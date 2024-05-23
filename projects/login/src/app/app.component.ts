import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    
  }

  search(): void {
    alert('Not implemented in this demo!');
  }

}