import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/firebase.service';
import { getAuth } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


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

    userList = []
  
  constructor(public authService: AuthService, 
    private firestore: AngularFirestore ) {
    
    //this.nome = authService.userData.displayName;
    /*if(this.user != null){
      this.nome = this.usercurrent.displayName;
      const cpf = this.user.email;
    }*/
    
  }/*
  async getValues(){
    const values = this.firestore.collection('users').doc(getAuth().currentUser?.uid).snapshotChanges()
    values.subscribe(res => {
      this.userList = res.map((e:any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {

    })

    console.log(values.toString)
  }*/
 
  async getUser(){
    let user = getAuth().currentUser?.uid;
    const docs = this.firestore.collection('users');
    const teste = this.firestore.collection('users').doc(user).snapshotChanges;
    const oi = teste.toString
    console.log(oi)
    console.log(teste)
    //const nomee = teste['nome'];
    
    const userinfo = docs.snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a =>
          {const data = 
          a.payload.doc.data(); 
          /*
          
          const id = a.payload.doc.id;
          const nome = a.payload.doc.data['name'];
          const birthday = a.payload.doc.data()['birthday'];*/
      }))
    );
  }
 

  ngOnInit(): void {
    //this.nome = this.authService.userData.displayName;
    this.getUser
  }

}
