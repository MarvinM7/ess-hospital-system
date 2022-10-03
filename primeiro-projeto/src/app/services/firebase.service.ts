import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface SignInProps {
  cpf: string,
  password: string,
}

export interface SignUpProps {
  name: string,
  cpf: string,
  phone: string,
  email: string,
  password: string,
  birthday: string,
  cep: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn: boolean = false;
  userData: any

  constructor(
    private firestore: AngularFirestore,
    private firebaseAuth: AngularFireAuth,
  ) {}
    
  async signIn({
    cpf,
    password
  }: SignInProps) {
    const response = await this.firebaseAuth.signInWithEmailAndPassword(cpf + '@user.com', password);

      this.firebaseAuth.authState.subscribe((user) =>
      {
        if(user){
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
          this.isLoggedIn = true;

        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!)
          this.isLoggedIn = false;
        }
      })

  }

  async signUp({
    birthday,
    cep,
    cpf,
    email,
    name,
    password,
    phone
  }: SignUpProps) {
    const response = await this.firebaseAuth.createUserWithEmailAndPassword(cpf + '@user.com', password)

    localStorage.setItem('user', JSON.stringify(response.user));

    this.firestore.collection('users').doc(response.user?.uid).set({
      cep,
      birthday,
      email,
      phone,
      name
    })
  }

  logout () {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }

  
}
