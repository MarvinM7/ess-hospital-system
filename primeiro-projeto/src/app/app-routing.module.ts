import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './authentication/login/login.component';
import { ForgotComponent } from './authentication/forgot/forgot.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forgot', component: ForgotComponent},

  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthenticationModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }


