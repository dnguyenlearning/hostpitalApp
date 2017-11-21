import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;
  constructor() { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('hosipital_user'))){
      this.user=JSON.parse(localStorage.getItem('hosipital_user'));
      console.log(this.user);
    }
  }

}
