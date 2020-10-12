
import { Injectable, Output, EventEmitter } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class homeService {
  @Output() showLoginPopup: EventEmitter<boolean> = new EventEmitter();
  @Output() showRegistePopup: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  openLogin(bit) {
    console.log(bit)
    this.showLoginPopup.emit(bit);
    //false for SurveyMode
  }

  openRegister(bit) {
    console.log(bit)
    this.showRegistePopup.emit(bit);
    //false for SurveyMode
  }
}