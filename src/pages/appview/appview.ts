import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormPage } from '../form/form';

@Component({
  selector: 'page-appview',
  templateUrl: 'appview.html'
})
export class AppPage {
  formpage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.formpage = FormPage;
  }



}
