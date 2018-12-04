import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [LoginComponent, SignUpComponent],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'sign-up', component:SignUpComponent},

    ])
  ]

})

export class UserModule { }
