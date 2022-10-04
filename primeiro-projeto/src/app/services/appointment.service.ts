import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/firebase.service';
import { getAuth } from 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private firestore: AngularFirestore,
    public authService: AuthService
    ) { 

    }

    async marcarExame(
      tipoPlano: string,
      tipoExame: string,
      local: string,
      dataExame: string
    ) {
      this.firestore.collection('appointments').doc(getAuth().currentUser?.uid).set({
       tipoPlano,
       tipoExame,
       local,
       dataExame
      })
    }

    async marcarConsulta(
      tipoPlano: string,
      especialidade: string,
      local: string,
      dataExame: string
    ) {
      this.firestore.collection('medical-appointments').doc(getAuth().currentUser?.uid).set({
       tipoPlano,
       especialidade,
       local,
       dataExame
      })
    }
}
