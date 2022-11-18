import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './myComponents/form/form.component';
import { LoginStuComponent } from './myComponents/login-stu/login-stu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFacComponent } from './myComponents/login-fac/login-fac.component';
import { FacHomeComponent } from './myComponents/fac-home/fac-home.component';
import { QuestionCardComponent } from './myComponents/question-card/question-card.component';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {environment} from '../environments/environment';
import { StudentListComponent } from './myComponents/student-list/student-list.component';
import { SelectionComponent } from './myComponents/selection/selection.component';
import { StartComponent } from './myComponents/start/start.component';
import { ShomeComponent } from './myComponents/shome/shome.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginStuComponent,
    LoginFacComponent,
    FacHomeComponent,
    QuestionCardComponent,
    StudentListComponent,
    SelectionComponent,
    StartComponent,
    ShomeComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
