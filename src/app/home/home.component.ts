import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft } from 'ng-animate';
import { homeService } from '../shared/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(fadeInLeft, {params: {
      timing: 1,
   
      // Specify granular values for `translate` on axis Y during 'bounceInDown' 
      a: '-100px',
      b: '0px',
      c: '0px',
      d: '0px',
    }
  }
  ))])
  ],
})
export class HomeComponent implements OnInit {
  bounce: any;
  textArray : any = [];
  private subscription;
  interval: any
  data: any = [{text : 'total design freedom'},{text : 'template'},{text:'blogs'},{text: 'features'}];

  constructor( private homeService: homeService) {
    this.showTextAnimation();
    this.subscription = this.homeService.showAnimation.subscribe((msg) => {
      console.log(msg);
      clearInterval(this.interval)
      const elements = document.getElementsByClassName("id-class");
      while (elements.length > 0) elements[0].remove();
      this.showTextAnimation();
		})
   }

  showTextAnimation(){
    let counter = 0;
    let i = 0;
    this.interval = setInterval(() => {
      this.textArray.push({text: this.data[counter++].text});
      i += 1;
      if (i >= this.data.length) {
        clearInterval(this.interval)
      }
    }, 700);
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
