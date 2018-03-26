import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  public id: string;
  public name: string;
  public email:string;
  public image: string;
  constructor(private router: Router) { 
    
  }
  public signOut() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
  ngOnInit() {
    setTimeout((router: Router) => {
      this.router.navigate(['nextRoute']);
    }, 15000);
    this.id = localStorage.getItem("Id");
    this.name = localStorage.getItem("Name");
    this.email = localStorage.getItem("Email");
    this.image = localStorage.getItem("ImageUrl");
  }

}
