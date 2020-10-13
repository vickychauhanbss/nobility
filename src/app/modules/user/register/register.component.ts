import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../../shared/_helpers/must-match.validator';

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
  registerForm: FormGroup;
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public homeService: homeService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.registerForm.controls; }

  dismissModal(){
    this.dialogRef.close();
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

}

  openLoginPopup(){
    this.dialogRef.close();
    this.homeService.openLogin(true)
  }

}
