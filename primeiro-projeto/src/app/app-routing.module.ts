import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';

import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},

  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthenticationModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }


