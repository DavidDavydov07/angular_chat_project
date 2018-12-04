import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { RouterModule } from '@angular/router';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';


@NgModule({
  declarations: [
    AppComponent

  ],

  imports: [

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpModule,
    HttpClientModule,

    ChatModule,
    UserModule,

    RouterModule.forRoot([
      {path: 'login', component: LoginComponent, pathMatch:'full'},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '*', component:LoginComponent},
      {path: '**', component:LoginComponent}
    ])


  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
