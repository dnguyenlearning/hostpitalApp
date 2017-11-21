import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Response } from '@angular/http/src/static_response';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MedicineService } from './../../../services/medicine.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit,OnDestroy {
  medicine;
  removeSuccess:boolean=false;
  medicineSubscription:Subscription;
  constructor(
    private route: Router,
    private medicineService:MedicineService,
    private flashMsg:FlashMessagesService,
    public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.medicine=this.data.row;
    this.removeSuccess=false;
  }
  ngOnDestroy(){
    if(this.medicineSubscription){
      this.medicineSubscription.unsubscribe();
    }
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  editMedicine(){
    this.closeDialog();
  }

  removeMedicine(medicineId){
    let agree=confirm('Do you want to delete?');
    if(!agree) {this.closeDialog(); return false;}
    this.medicineSubscription=this.medicineService.deleteMedicine(medicineId).subscribe(data=>{
      if(data.success){
        this.flashMsg.show('Deleted Successfully!',{cssClass:'alert-success', timeout:3000});
        this.removeSuccess=true;
        this.closeDialog();
        
      }else{
        this.flashMsg.show(data.msg, {cssClass:'alert-danger', timeout:3000} )
        return false;
      }
    },(err:Response)=>{console.log(err)})
  }
}
