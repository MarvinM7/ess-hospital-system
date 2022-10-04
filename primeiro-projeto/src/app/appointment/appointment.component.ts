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
  
  constructor(private appointmentService: AppointmentService, private router: Router){}
  
  ngOnInit(): void {
  }

  async marcarExame(
    tipoPlano: string,
    tipoExame: string,
    local: string,
    dataExame: string
  ) {
    try{
      await this.appointmentService.marcarExame(
        tipoPlano,
        tipoExame,
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
