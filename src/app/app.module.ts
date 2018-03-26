import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {
  MatToolbarModule ,
   MatToolbarRow ,
   MatCheckboxModule,
    MatGridListModule ,
     MatListModule ,
     MatTableModule,
     MatSelectModule,
     MatCardModule,
     MatSortModule,
     MatPaginatorModule,
     MatButtonModule,
     MatTabsModule,
     MatProgressSpinnerModule,
     MatNativeDateModule,
     MatSlideToggleModule,
     MatProgressBarModule,
     MatSnackBarModule,
     MatIconModule,
     MatButtonToggleModule,
      MatDatepickerModule } from '@angular/material';

import {MatSidenavModule} from '@angular/material/sidenav';

import {CdkTableModule} from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutes } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MainpageComponent } from './mainpage/mainpage.component';
import { GoogleSigninComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    GoogleSigninComponent
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    RouterTestingModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSortModule,
    MatNativeDateModule,
    HttpClientModule,
    CdkTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    HttpModule,
    MatListModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
