
import { Injectable, Output, EventEmitter } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class homeService {
  @Output() showAnimation: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
  animationFxn(bit) {
    console.log(bit)
    this.showAnimation.emit(bit);
    //false for SurveyMode
  }
}