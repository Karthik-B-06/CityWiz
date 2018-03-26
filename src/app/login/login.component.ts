import { Component, OnInit, AfterViewInit,ElementRef } from '@angular/core';

import { AppComponent } from '../app.component';
import { Http } from '@angular/http';

declare const gapi: any;

@Component({
  selector: 'google-signin',
  template: '<button id="googleBtn" class="loginBtn loginBtn--google">Google</button>',
  styles: [ 
    `.loginBtn {
    box-sizing: border-box;
    position: relative;
    /* width: 13em;  - apply for fixed size */
    margin: 0.2em;
    padding: 0 15px 0 46px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: white;
  }`,
  `.loginBtn.loginBtn--google {
      box-sizing: border-box;
      position: relative;
      margin: 0.2em;
      padding: 0 15px 0 46px;
      border: none;
      text-align: left;
      cursor: pointer;
      line-height: 34px; white-space: nowrap; border-radius: 0.2em; font-size: 16px; color: white;
  }`, 
  `.loginBtn:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }`,
  `.loginBtn:focus {
    outline: none;
  }`,
  `.loginBtn:active {
    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
  }`,
  `.loginBtn.loginBtn--google:before {
      border-right: #BB3F30 1px solid;
      background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
  }`, 
    `.loginBtn--google {
    background: #DD4B39;
  }`
  ]
})
export class GoogleSigninComponent implements AfterViewInit {

  private clientId:string = '1086524363400-ia4hs2qee3ovd3c1g4cltak68eip1pfp.apps.googleusercontent.com';
  
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  public auth2: any;
  public googleInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: 'single_host_origin',
        scope: that.scope
      });
      that.attachSignin(that.element.nativeElement.firstChild);
    });
  }
  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE


      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  constructor(private element: ElementRef) {
    console.log('ElementRef: ', this.element);
  }

  ngAfterViewInit() {
    this.googleInit();
  }

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http: Http) { 
  }
  ngOnInit() {
  }

}
