import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface SignInProps {
  email: string,
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
    email,
    password
  }: SignInProps) {
    const response = await this.firebaseAuth.signInWithEmailAndPassword(email, password);

      this.firebaseAuth.authState.subscribe(async (user: any) =>
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
    const response = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
    await response.user?.updateProfile({
      displayName: name,
    });

    localStorage.setItem('user', JSON.stringify(response.user));

    this.firestore.collection('users').doc(response.user?.uid).set({
      cep,
      birthday,
      email,
      phone,
      name,
      cpf,
    })
  }

  async isLogged() {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout () {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }
}
