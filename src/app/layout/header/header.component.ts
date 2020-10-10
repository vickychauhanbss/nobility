import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    let el = document.getElementById('option-home');
    console.log(el);
      if(el){
        el.scrollIntoView({behavior:"smooth"});
    }
  }
}
