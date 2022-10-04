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
  
  constructor(private appointmentService: AppointmentService, private router: Router){}
  
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

    } catch(error){
      alert(error)
    }
  }

  toggleModal() {
    this.mostrarModal = !this.mostrarModal
  }

}
