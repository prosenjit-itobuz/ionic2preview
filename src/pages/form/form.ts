import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
       email: [null, Validators.required],
       password: [null, Validators.required],
       terms: [{checked:false}, Validators.required]
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
