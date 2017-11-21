import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit ,OnDestroy} from '@angular/core';
import { CannotContainSpace } from '../../common/nospace.validators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {

  enableR:boolean=false;
  nameLogin:string;
  status:boolean;
  userSubscription:Subscription;
  form=new FormGroup({
    username: new FormControl('',[Validators.required, CannotContainSpace]),
    password: new FormControl('',Validators.required)
  })
  
  constructor(
    private userService:UserService,
    private flashMsg:FlashMessagesService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    
  }
  ngOnDestroy(){
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }
  onSubmit(rf){
    this.enableR=true;
    this.userSubscription=this.userService.authenticateUser(rf.value)
    .subscribe(data=>{
      if(data.success){
        this.userService.storeUserDate(data.token,data.user);

        this.flashMsg.show('You are Logged In',{ cssClass: 'alert-success',timeout: 2000})

        let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
        
      }else{
        this.flashMsg.show(data.msg,{ cssClass: 'alert-danger',timeout: 3000});
        this.router.navigate(['/login']);
      }
    })
  }

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }

}
