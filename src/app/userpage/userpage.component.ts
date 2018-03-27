import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Http } from '@angular/http';

import { User } from '../_models/user';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  public user: User;
  constructor(private router: Router,private service: AuthService, private _http: Http) { 
  }

  ngOnInit() {
    if(!this.service.isLoggedIn()) {
      alert("Please Login First");
      this.router.navigate(['/login']);
    }

    this.user = this.service.getUser();
    
    
  }

  signOut() {
    this.service.logout();
  }

}
