import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginForm = new FormGroup({
    email: new FormControl(null, ([Validators.required, Validators.email])),
    password: new FormControl(null, ([Validators.required, Validators.minLength(5)])),
  })
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
   
  }

 


}
