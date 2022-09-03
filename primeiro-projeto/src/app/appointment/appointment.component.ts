import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  mostrarModal: boolean = false

  ngOnInit(): void {
  }

  marcarExame() {
  }

  toggleModal() {
    this.mostrarModal = !this.mostrarModal
  }
}
