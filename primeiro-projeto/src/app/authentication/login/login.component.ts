import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async handleLogin(cpf: string, password: string) {
    try {
      await this.authService.signIn({
        cpf,
        password
      })

      alert('Sucesso')

      this.router.navigate(['/'])
    } catch (error) {
      alert('Erro')
    }
  }
}
