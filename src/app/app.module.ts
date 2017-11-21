import { UserGuard } from './guards/user.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatChipsModule,MatSlideToggleModule,MatNativeDateModule,MatDatepickerModule,MatIconModule,MatCardModule,MatSortModule,MatDialogModule,MatPaginatorModule,MatTableModule,MatFormFieldModule, MatInputModule,MatButtonModule, MatToolbarModule, MatSidenavModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { DialogUserComponent } from './components/home/dialog-user/dialog-user.component';
import { MedicineService } from './services/medicine.service';
import { UserService } from './services/user.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ImageUrlDirective } from './directives/image-url.directive';
import { EditComponent } from './components/dashboard/edit/edit.component';



const routes:Routes=[
  {path:'', component:HomeComponent, canActivate: [UserGuard]},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent ,canActivate: [UserGuard]},
  {path:'dashboard', component:DashboardComponent, canActivate: [UserGuard]},
  {path:'edit/:medicineId', component:EditComponent, canActivate: [UserGuard]},
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    NavbarComponent,
    DialogUserComponent,
    ImageUrlDirective,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    HttpModule
  ],
  providers: [MedicineService, UserService, UserGuard],
  bootstrap: [AppComponent],
  entryComponents:[DialogUserComponent]
})
export class AppModule { }
