import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';

import { HomepageComponent } from './homepage/homepage.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './guards/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'contato', component: ContactComponent},
  { path: 'quemsomos', component: AboutUsComponent},
  { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard]},
  { path: 'perfil', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'}), AuthenticationModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }


