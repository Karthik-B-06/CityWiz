import { Component, OnInit, AfterViewInit,ElementRef } from '@angular/core'
import { AppComponent } from '../app.component';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import {Router} from "@angular/router";
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn : boolean = false;
  constructor(private router: Router, private service: AuthService) { 
  }
  ngOnInit() {
    
  }
  stepIn() {
    if(this.service.isLoggedIn()) {
      this.router.navigate(['user']);      
    }
    else {
      this.service.signInWithGoogle();
    }
    setTimeout(function() {
      alert("Signed in Successfully, Log in using Google now !");
    }, 30000);
                                                       
  }

}
