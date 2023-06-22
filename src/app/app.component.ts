import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-assignment';
  submitted = false;

  user = {
    email:"",
    subscription:"",
    password:""
  }

@ViewChild('myForm') myForm!:NgForm;

  onSubmit(){ 
    this.submitted = true;

    this.user.email = this.myForm.value.email;
    this.user.subscription = this.myForm.value.subscription;
    this.user.password = this.myForm.value.password;   
  }
}
