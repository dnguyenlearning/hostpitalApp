import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Response } from '@angular/http/src/static_response';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MedicineService } from '../../../services/medicine.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  EditMedicineForm;
  enableR:boolean=false;
  editMedicineSubscription:Subscription;
  imageLink:string ;
  inValid:boolean=false;

  medicineId:string;
  medicine={};
  errorHandler(event) {
    console.debug(event);
    this.imageLink='invalid';
  }

  constructor(
    fb:FormBuilder,
    private userService:UserService,
    private route:Router,
    private router:ActivatedRoute,
    private flashMsg: FlashMessagesService,
    private medicineService:MedicineService
  ) { 
    this.EditMedicineForm=fb.group({
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
    if(this.editMedicineSubscription){
      this.editMedicineSubscription.unsubscribe();
    }
  }


  ngOnInit() {
    this.router.paramMap
    .switchMap((params: ParamMap) => {
      this.medicineId=params.get('medicineId');
      return this.medicineService.getContentMedicine(this.medicineId);
    })
    .subscribe(data=>{
      if(data.success) {
        this.medicine=data.medicine;
        this.imageLink=this.medicine['imageUrl'];
        this.EditMedicineForm.controls['name'].setValue(this.medicine['name']);
        this.EditMedicineForm.controls['country'].setValue(this.medicine['country']);
        this.EditMedicineForm.controls['exportedDate'].setValue(this.medicine['exportedDate']);
        this.EditMedicineForm.controls['importedDate'].setValue(this.medicine['importedDate']);
        this.EditMedicineForm.controls['expiredDate'].setValue(this.medicine['expiredDate']);
        this.EditMedicineForm.controls['quantity'].setValue(this.medicine['quantity']);
        this.EditMedicineForm.controls['storedPlace'].setValue(this.medicine['storedPlace']);
      }else{
        this.flashMsg.show(data.msg,{cssClass:'alert-danger', timeout:3000});
        return false;
      }
    },(err)=>console.log(err));
  }

  onEditMedicine(edf){
    this.editMedicineSubscription= this.medicineService.updateMedicine(this.medicineId,edf.value).subscribe(data=>{
      if(data.success){
        this.flashMsg.show('updated New Value', {cssClass:'alert-success', timeout:3000});
        this.route.navigate(['/']);
      }else{
        this.flashMsg.show(data.msg,{cssClass:'alert-danger', timeout:3000});
        return false;
      }
    },
  (err:Response)=>{
    console.log(err);
  })
    
  }
  DatePickerChange(picker){
    console.log(picker);
  }

  linkChange(link){
    this.imageLink=link.value;
  }

  get name(){
    return this.EditMedicineForm.get('name');
  }
  get country(){
    return this.EditMedicineForm.get('country');
  }
  get exportedDate(){
    return this.EditMedicineForm.get('exportedDate');
  }
  get importedDate(){
    return this.EditMedicineForm.get('importedDate');
  }
  get expiredDate(){
    return this.EditMedicineForm.get('expiredDate');
  }
  get quantity(){
    return this.EditMedicineForm.get('quantity');
  }
  get storedPlace(){
    return this.EditMedicineForm.get('storedPlace');
  }

}