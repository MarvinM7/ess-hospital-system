import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {
  mostrarModal: boolean = false
  scheduleAppointments: any = [];
  
  constructor(private appointmentService: AppointmentService, private router: Router){
    this.listarConsulta();
  }
  
  ngOnInit(): void {
  }

  async marcarConsulta(
    tipoPlano: string,
    especialidade: string,
    local: string,
    dataExame: string
  ) {
    try{
      await this.appointmentService.marcarConsulta(
        tipoPlano,
        especialidade,
        local,
        dataExame
      )
      await this.listarConsulta();
    } catch(error){
      alert(error)
    }
  }

  async listarConsulta() {
    try {
      const data: any = [];
      (await this.appointmentService.listarConsulta())
      .subscribe((snapshots) => snapshots.forEach((snapshot: any) => {
        data.push({
          id: snapshot.id,
          ...snapshot.data(),
        })
      }));
      this.scheduleAppointments = data ?? [];
    } catch(error){
      alert(error)
    }
  }

  async excluirConsulta(id: string) {
    try {
      await this.appointmentService.excluirConsulta(id);
      await this.listarConsulta();
    } catch(error){
      alert(error)
    }
  }

  toggleModal() {
    this.mostrarModal = !this.mostrarModal
  }

}
