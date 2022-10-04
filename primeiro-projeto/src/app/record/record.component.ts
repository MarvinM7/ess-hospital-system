import { Component, OnInit } from '@angular/core';

type ExpertiseProps = 'Cardiologia' | 'Endocrinologia' | 'Psiquiatria' | 'Odontologia' | 'Neurologia'

interface ScheduleAppointmentsByExpertiseProps {
  Cardiologia: number;
  Endocrinologia: number;
  Psiquiatria: number;
  Odontologia: number;
  Neurologia: number;
}

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})

export class RecordComponent implements OnInit {
  scheduleAppointmentsByExpertise: ScheduleAppointmentsByExpertiseProps = {
    Cardiologia: 0,
    Endocrinologia: 0,
    Neurologia: 0,
    Odontologia: 0,
    Psiquiatria: 0
  }

  constructor() { }

  ngOnInit(): void {
    const scheduleAppointments = localStorage.getItem('scheduleAppointments')

    if (scheduleAppointments) {
      JSON.parse(scheduleAppointments).map((elem: any) => {
        const expertise = elem.especialidade as ExpertiseProps

        const scheduleAppointmentsByExpertise =  {
          ...this.scheduleAppointmentsByExpertise,
          [expertise]: this.scheduleAppointmentsByExpertise[expertise] + 1
        }

        this.scheduleAppointmentsByExpertise = scheduleAppointmentsByExpertise
      })
    }
  }
}
