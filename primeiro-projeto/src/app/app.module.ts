import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
//import { HttpModule } fro
//import { AuthenticationModule } from './authentication/authentication.module';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RecordComponent } from './record/record.component';


import { AuthService } from './services/firebase.service';
import { AuthGuard } from './guards/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CarouselComponent,
    RodapeComponent,
    HomepageComponent,
    AppointmentComponent,
    ScheduleAppointmentComponent,
    ContactComponent,
    AboutUsComponent,
    UserProfileComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
   // HttpModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
