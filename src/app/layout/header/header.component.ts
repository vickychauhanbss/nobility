import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../modules/user/login/login.component';
import { RegisterComponent } from '../../modules/user/register/register.component';
import { homeService } from '../../shared/services/home/home.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
private subscriptionLogin;
private subscriptionRegsiter;
  constructor(public dialog: MatDialog, public homeService: homeService) {

    this.subscriptionLogin = this.homeService.showLoginPopup.subscribe((bit)=>{
      this.openLoginPopup();
    })

    this.subscriptionRegsiter = this.homeService.showRegistePopup.subscribe((bit)=>{
      this.openRegisterPopup();
    })

   }

  ngOnInit(): void {
  }

  scroll() {
    let el = document.getElementById('meteor-home');
    console.log(el);
      if(el){
        el.scrollIntoView({behavior:"smooth"});
    }
  }

  openLoginPopup(){
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
      autoFocus: false,
      maxHeight: '90vh' //you can adjust the value as per your view
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  openRegisterPopup(){
    const dialogRef = this.dialog.open(RegisterComponent,{
      disableClose: true,
      autoFocus: false,
      maxHeight: '90vh' //you can adjust the value as per your view
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  ngOnDestroy() {
    this.subscriptionLogin.unsubscribe();
    this.subscriptionRegsiter.unsubscribe();
	}

}
