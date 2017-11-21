import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CannotContainSpace } from '../../common/nospace.validators';
import { usernameTaken } from '../../common/usernameRegister.validators';
import { incorrectMailFormat } from '../../common/formatemail.validators';
import { emailTaken } from '../../common/emailRegister.validators';
import { FlashMessagesService } from 'angular2-flash-messages';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,OnDestroy {
  registerForm;
  enableR:boolean=false;
  registerSubscription:Subscription;
  constructor(
    fb:FormBuilder,
    private userService:UserService,
    private route:Router,
    private flashMsg: FlashMessagesService
  ) { 
    this.registerForm=fb.group({
      name:['', Validators.required],
      username:['',[Validators.required,CannotContainSpace],usernameTaken(userService)],
      email:['',[Validators.required,CannotContainSpace,incorrectMailFormat],emailTaken(userService)],
      password:['',Validators.required],
    });
  }

  ngOnInit() {
  }

  onRegister(rf){
    if(!rf.valid){return false};
    this.enableR=true;
    this.registerSubscription=this.userService.registerUser(rf.value)
      .subscribe(data=>{
        if(data.success){
          this.flashMsg.show('Register successfully! You are now can login',{ cssClass: 'alert-success',timeout: 3000})
          this.route.navigate(['/login']);
        }else{
          this.flashMsg.show('Something went Wrong!',{ cssClass: 'alert-danger',timeout: 3000});
          this.route.navigate(['/register']);
        }
      })
  }



  ngOnDestroy(){
    if(this.registerSubscription){
      this.registerSubscription.unsubscribe()      
    }
  }

  get name(){
    return this.registerForm.get('name');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get username(){
    return this.registerForm.get('username');
  }

}
