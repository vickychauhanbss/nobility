import { Component, OnInit } from '@angular/core';
import { homeService } from '../../shared/services/home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private homeService : homeService) { }

  ngOnInit(): void {
  }

  scroll() {
    this.homeService.animationFxn('show')
    let el = document.getElementById('option-home');
    console.log(el);
      if(el){
        el.scrollIntoView({behavior:"smooth"});
    }
  }
}
