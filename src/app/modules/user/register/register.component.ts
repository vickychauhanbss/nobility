import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { homeService } from '../../../shared/services/home/home.service';
export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public homeService: homeService
    ) { }

  ngOnInit(): void {
  }

  dismissModal(){
    this.dialogRef.close();
  }

  openLoginPopup(){
    this.dialogRef.close();
    this.homeService.openLogin(true)
  }

}
