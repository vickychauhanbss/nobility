import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor() {

   }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

  ngOnDestroy(): void {
	}
}

//https://myh.godaddy.com/?pl_id=1&prog_id=GoDaddy#/hosting/cpanel/account/2c9b561c-296a-11e9-8160-3417ebe60eb6/file_manager
