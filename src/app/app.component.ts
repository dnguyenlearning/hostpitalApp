import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sideNavClosed:boolean=false;
  // @ViewChild('sideleft') ; 
  constructor(
    private userService:UserService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ){}

  openSideNav(e,sidebar){
    (e.open)?sidebar.open():sidebar.close();
    this.sideNavClosed=false;
  }
  closedSideNav(){
    this.sideNavClosed=true;
  }
  navigate(returnUrl,sidenav){
    this.router.navigate([returnUrl]);
    this.sideNavClosed=true;
    sidenav.close();
  }
  logout(sidebar){
    this.userService.logout();
    sidebar.close();
    this.sideNavClosed=true;
    this.flashMessage.show('You are logged out!',{cssClass:'alert-success', timeout:3000});
    this.router.navigate(['/login']);
  }

}
