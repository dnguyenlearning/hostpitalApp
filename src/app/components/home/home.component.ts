import { Subscription } from 'rxjs/Subscription';
import { MedicineService } from './../../services/medicine.service';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns = ['_id','imageUrl', 'name', 'exportedDate', 'importedDate','expiredDate','country','quantity','storedPlace'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  expiredDateProducts:number=0;
  warningDateProducts:number=0;
  medicineSubscription:Subscription;
  dataCopied
  constructor( 
    private fb:FormBuilder,
    private medicineService :MedicineService,
    public dialog: MatDialog) { }
  form:FormGroup;

  ngOnDestroy(){
    this.medicineSubscription.unsubscribe();
  }
  ngOnInit() {
    this.medicineSubscription=this.medicineService.getMedicines().subscribe(data=>{
      if(data.success){
        this.exampleDatabase.dataChange.next(data.medicines);
        // console.log(data.medicines);
        this.dataCopied=data.medicines;
        this.updateWarningProduct(this.dataCopied);
      }
    })


    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
    this.form=this.fb.group({
      id: ['',Validators.required],
      name:['',Validators.required]
    })
  }

  filterExpiredProduct(value){
    switch(value){
      case 'expired': 
        let expiredDates=this.dataCopied.filter(medicine=>{
          let date1=new Date(medicine.expiredDate);
          let date2=new Date();
          let threeDays=3*1000*60 * 60 * 24;
          let betweenTime=date1.getTime()-date2.getTime();
          return betweenTime<threeDays;
        });
        this.exampleDatabase.dataChange.next(expiredDates); 
        break;
      case 'all'    : this.exampleDatabase.dataChange.next(this.dataCopied); break;
      case 'warning': 
        let warningDates=this.dataCopied.filter(medicine=>{
          let date1=new Date(medicine.expiredDate);
          let date2=new Date();
          let threeDays=3*1000*60 * 60 * 24;
          let fiveDays=5*1000*60 * 60 * 24;
          let betweenTime=date1.getTime()-date2.getTime();
          return (betweenTime>threeDays && betweenTime<fiveDays);
        });
        this.exampleDatabase.dataChange.next(warningDates); 
    }
  }

  expiredDate(row){
    let date1=new Date(row.expiredDate);
    let date2=new Date();
    let threeDays=3*1000*60 * 60 * 24;
    let betweenTime=date1.getTime()-date2.getTime();
    if(betweenTime<threeDays){
      return true;
    }
    return false;
  }

  warningDate(row){
    let date1=new Date(row.expiredDate);
    let date2=new Date();
    let threeDays=3*1000*60 * 60 * 24;
    let fiveDays=5*1000*60 * 60 * 24;
    let betweenTime=date1.getTime()-date2.getTime();
    if(betweenTime>threeDays && betweenTime<fiveDays){
      return true;
    }
    return false;
  }


  formatDate(dateInput){
    let date = new Date(dateInput);
    return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
  }
  createUser(form){
    // this.exampleDatabase.addUser(form.value);
    this.form.reset();
  }

  updateWarningProduct(dataCopied){
    this.expiredDateProducts=0;
    this.warningDateProducts=0;
    dataCopied.map(each=>{
      let date1=new Date(each.expiredDate);
      let date2=new Date();
      let threeDays=3*1000*60 * 60 * 24;
      let fiveDays=5*1000*60 * 60 * 24;
      let betweenTime=date1.getTime()-date2.getTime();
      if (betweenTime<threeDays){
        this.expiredDateProducts++;
      }else if(betweenTime< fiveDays){
        this.warningDateProducts++;
      }
    })
  }
  
  getDataEachRow(row){

    let dialogRef = this.dialog.open(DialogUserComponent, {
      width: '300px',
      // position:{top:'25px',left:'25px'},
      data: { row }
    });
    dialogRef.backdropClick().subscribe(result=>{
      // console.log('backdrop Click');
    })
    dialogRef.afterClosed().subscribe(result=>{
      if(dialogRef.componentInstance.removeSuccess){
        // console.log(dialogRef.componentInstance.medicine._id);
        this.dataCopied=this.dataCopied.filter(each=>{
          return each._id!=dialogRef.componentInstance.medicine._id;
        });
        this.exampleDatabase.dataChange.next(this.dataCopied);
        this.updateWarningProduct(this.dataCopied);
      }
      
    })
  }
}


export interface Medicine {
  _id: string;
  imageUrl:string;
  name: string;
  exportedDate:Date;
  importedDate:Date;
  expiredDate:Date;
  country: string;
  quantity: number;
  storedPlace: string;

}

export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Medicine[]> = new BehaviorSubject<Medicine[]>([]);
  get data(): Medicine[] { 
    return this.dataChange.value; 
  }

  constructor() {
    // Fill up the database with 100 users.
    // for(let i=0;i<15;i++){ this.addDataTestUser()} 
    // console.log(this.data);
  }



  addDataTestUser(){
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }
  
  

  /** Builds and returns a new User. */
  private createNewUser() {
    
    return {
      _id: '12421552',
      imageUrl:'assets/images/ok.jpg',
      name: 'duong nguyen',
      exportedDate:new Date(),
      importedDate:new Date(),
      expiredDate: new Date(),
      country: 'USA',
      quantity: 10,
      storedPlace: 'B place'
    };
  }
}




export class ExampleDataSource extends DataSource<any> {



  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase,
    private _paginator: MatPaginator,
    private _sort:MatSort
  ) {super();}

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Medicine[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
      this._filterChange,
      this._sort.sortChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      
      // console.log(this._exampleDatabase.data.slice());
      let datafilter= this._exampleDatabase.data.slice().filter((item:Medicine)=>{
        let searchStr = (item.name + item.country).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;

      });


      // const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      
      let datapaginate=datafilter.splice(startIndex, this._paginator.pageSize);

      // console.log(datapaginate);
      return this.getSortedData(datapaginate);
      
    });
  }



  getSortedData(data): Medicine[] {
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'exportedDate': [propertyA, propertyB] = [a.exportedDate, b.exportedDate]; break;
        case 'importedDate': [propertyA, propertyB] = [a.importedDate, b.importedDate]; break;
        case 'expiredDate': [propertyA, propertyB] = [a.expiredDate, b.expiredDate]; break;
        case 'country': [propertyA, propertyB] = [a.country, b.country]; break;
        case 'quantity': [propertyA, propertyB] = [a.quantity, b.quantity]; break;
        case 'storedPlace': [propertyA, propertyB] = [a.storedPlace, b.storedPlace]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }


  disconnect() { }
}
