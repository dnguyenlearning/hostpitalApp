import { MedicineService } from './../../services/medicine.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Response } from '@angular/http/src/static_response';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  addMedicineForm;
  enableR:boolean=false;
  addMedicineSubscription:Subscription;
  imageLink:string ;
  inValid:boolean=false;
  medicineSubscription:Subscription;
  errorHandler(event) {
    console.debug(event);
    this.imageLink='invalid';
  }

  constructor(
    fb:FormBuilder,
    private userService:UserService,
    private route:Router,
    private flashMsg: FlashMessagesService,
    private medicineService:MedicineService
  ) { 
    this.addMedicineForm=fb.group({
      name:['', Validators.required],
      country:['',Validators.required],
      exportedDate:['',Validators.required],
      importedDate:['',Validators.required],
      expiredDate:['',Validators.required],
      quantity:['',Validators.required],
      storedPlace:['',Validators.required],
    });
    
  }

  
  ngOnDestroy(){
    if(this.medicineSubscription){
      this.medicineSubscription.unsubscribe()      
    }
  }
  ngOnInit() {

  }



  linkChange(link){
    this.imageLink=link.value;
  }



  onAddMedicine(amf){
    let newMedicine=amf.value;
    newMedicine.imageUrl=this.imageLink;
    this.medicineSubscription=this.medicineService.addNewMedicine(newMedicine)
      .subscribe(data=>{
        if(data.success){
          this.flashMsg.show('added New Medicine',{cssClass:'alert-success', timeout:3000});
          this.route.navigate(['/']);
        }else{
          this.flashMsg.show(data.msg,{cssClass:'alert-danger', timeout:3000});
        }
      },
    (err:Response)=>{
      console.log(err);
    })
  }


  DatePickerChange(picker){
    console.log(picker);
  }

  // name:['', Validators.required],
  // country:['',Validators.required],
  // exportedDate:['',Validators.required],
  // importedDate:['',Validators.required],
  // expiredDate:['',Validators.required],
  // quantity:['',Validators.required],
  // storedPlace:['',Validators.required],
  get name(){
    return this.addMedicineForm.get('name');
  }
  get country(){
    return this.addMedicineForm.get('country');
  }
  get exportedDate(){
    return this.addMedicineForm.get('exportedDate');
  }
  get importedDate(){
    return this.addMedicineForm.get('importedDate');
  }
  get expiredDate(){
    return this.addMedicineForm.get('expiredDate');
  }
  get quantity(){
    return this.addMedicineForm.get('quantity');
  }
  get storedPlace(){
    return this.addMedicineForm.get('storedPlace');
  }
}
