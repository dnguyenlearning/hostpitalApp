import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output('openSideNav') openSideNav=new EventEmitter();
  openLeftSideNav:boolean=false;
  @Input('closed') sideNavClosed;
  constructor() { }

  ngOnInit() {
    
  }

  openLeftNavbar(){
    this.openLeftSideNav=(this.sideNavClosed)?true:(this.openLeftSideNav)?false:true;
    this.openSideNav.emit({open:this.openLeftSideNav});
  }
}
