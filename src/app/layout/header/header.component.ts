import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../modules/user/login/login.component';
import { RegisterComponent } from '../../modules/user/register/register.component';
import { homeService } from '../../shared/services/home/home.service';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
private subscriptionLogin;
private subscriptionRegsiter;
private expendToggle : boolean;
  constructor(public dialog: MatDialog, public homeService: homeService, private _router: Router) {

    this.subscriptionLogin = this.homeService.showLoginPopup.subscribe((bit)=>{
      this.openLoginPopup();
    })

    this.subscriptionRegsiter = this.homeService.showRegistePopup.subscribe((bit)=>{
      this.openRegisterPopup();
    })

   }

  ngOnInit(): void {
    this.expendToggle = false
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

  goToPages(route){
    var element = document.getElementById("navbarCollapse");
    if(element){
      element.classList.remove("show");
    }
    document.getElementById("p2").setAttribute('aria-expanded', 'false');
    this._router.navigate([route])
  }

  ngOnDestroy() {
    this.subscriptionLogin.unsubscribe();
    this.subscriptionRegsiter.unsubscribe();
	}

}
