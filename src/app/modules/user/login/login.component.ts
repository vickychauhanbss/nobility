import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { homeService } from '../../../shared/services/home/home.service';

export interface DialogData {
  name: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public homeService: homeService
  ) { }

  ngOnInit(): void {
  }

  dismissModal(){
    this.dialogRef.close();
  }

  openRegisterPopup(){
    this.dialogRef.close();
    this.homeService.openRegister(true)
  }

}
