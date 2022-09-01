import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent, 
    ForgotComponent
  ]
})
export class AuthenticationModule { }
