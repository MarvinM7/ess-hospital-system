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
      this.firestore.collection('appointments').add({
        tipoPlano,
        tipoExame,
        local,
        dataExame,
        paciente: getAuth().currentUser?.uid,
      });
    }

    async listarExame() {
      return this.firestore.collection('appointments', ref => ref.where("paciente", "==", getAuth().currentUser?.uid)).get();
    }

    async atualizarExame(
      id: string,
      tipoPlano: string,
      tipoExame: string,
      local: string,
      dataExame: string
    ) {
      this.firestore.doc(`appointments/${id}`).set({
        tipoPlano,
        tipoExame,
        local,
        dataExame,
        paciente: getAuth().currentUser?.uid,
      });
    }

    async excluirExame(id: string) {
      return this.firestore.doc(`appointments/${id}`).delete();
    }

    async marcarConsulta(
      tipoPlano: string,
      especialidade: string,
      local: string,
      dataExame: string,
    ) {
      this.firestore.collection('medical-appointments').add({
       tipoPlano,
       especialidade,
       local,
       dataExame,
       paciente: getAuth().currentUser?.uid,
      })
    }

    async listarConsulta() {
      return this.firestore.collection('medical-appointments', ref => ref.where("paciente", "==", getAuth().currentUser?.uid)).get();
    }

    async atualizarConsulta(
      id: string,
      tipoPlano: string,
      tipoExame: string,
      local: string,
      dataExame: string
    ) {
      this.firestore.doc(`medical-appointments/${id}`).set({
        tipoPlano,
        tipoExame,
        local,
        dataExame,
        paciente: getAuth().currentUser?.uid,
      });
    }

    async excluirConsulta(id: string) {
      return this.firestore.doc(`medical-appointments/${id}`).delete();
    }
}
