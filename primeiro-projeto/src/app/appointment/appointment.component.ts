import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  mostrarModal: boolean = false
  appointments: any = [];

  constructor(private appointmentService: AppointmentService, private router: Router) {
    this.listarExame();
  }

  ngOnInit(): void {
  }

  async marcarExame(
    tipoPlano: string,
    tipoExame: string,
    local: string,
    dataExame: string
  ) {
    try{
      if (tipoExame == '') {
        alert('Preencha o tipo de exame')
        return
      }

      if (local == '') {
        alert('Preencha o local')
        return
      }

      if (dataExame == '') {
        alert('Preencha a data do exame')
        return
      }

      await this.appointmentService.marcarExame(
        tipoPlano,
        tipoExame,
        local,
        dataExame
      )

      this.toggleModal()

      await this.listarExame();
    } catch(error){
      alert(error)
    }
  }

  async listarExame() {
    try {
      const data: any = [];
      (await this.appointmentService.listarExame())
      .subscribe((snapshots) => snapshots.forEach((snapshot: any) => {
        data.push({
          id: snapshot.id,
          ...snapshot.data(),
        })
      }));
      this.appointments = data ?? [];
    } catch(error){
      alert(error)
    }
  }

  async excluirExame(id: string) {
    try {
      await this.appointmentService.excluirExame(id);
      await this.listarExame();
    } catch(error){
      alert(error)
    }
  }

  toggleModal() {
    this.mostrarModal = !this.mostrarModal
  }
}
