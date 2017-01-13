import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  loginform : FormGroup;

  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   fb: FormBuilder
   ) {
     this.loginform = fb.group({
       email: null,
       password: null
     })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  loginSubmit(form) {
    console.log('Reactive form data');
    console.log(form._value);
  }

}
