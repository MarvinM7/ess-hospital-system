import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';

import { HomepageComponent } from './homepage/homepage.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { ContactComponent } from './contact/contact.component';
import { RecordComponent } from './record/record.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './guards/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'contato', component: ContactComponent},
  { path: 'registro', component: RecordComponent},
  { path: 'quemsomos', component: AboutUsComponent},
  { path: 'appointment-exam', component: AppointmentComponent, canActivate: [AuthGuard]},
  { path: 'appointment', component: ScheduleAppointmentComponent, canActivate: [AuthGuard]},
  { path: 'perfil', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'}), AuthenticationModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }


