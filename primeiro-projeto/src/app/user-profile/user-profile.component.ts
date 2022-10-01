import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/firebase.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  auth = getAuth();
  user = this.auth.currentUser;
  usercurrent = JSON.parse(localStorage.getItem('user') ||'{}');
  //nome: string;
  
  constructor(public authService: AuthService ) {
    
    //this.nome = authService.userData.displayName;
    /*if(this.user != null){
      this.nome = this.usercurrent.displayName;
      const cpf = this.user.email;
    }*/
    
  }

 

  ngOnInit(): void {
    //this.nome = this.authService.userData.displayName;
  }

}
