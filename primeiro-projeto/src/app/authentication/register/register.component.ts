import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  onSubmit(form: Form){
    console.log(form);
  }

  consultaCEP(cep: any, form: Form){
    cep = cep.replace(/\D/g,'');
    if(cep != ""){
      let validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .pipe(map((dados: any) => dados))
          .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados :any, form: any){
    form.form.patchValue({
      rua: dados.logradouro,
        cep: dados.cep,
        bairro: dados.bairro,
        estado: dados.uf,
        cidade: dados.localidade
    })
  }

  ngOnInit(): void {
  }

  fazerRegister(){
  }

  async handleRegister(
    name: string,
    cpf: string,
    phone: string,
    email: string,
    password: string,
    birthday: string, // Formato: ano-mes-dia
    cep: string
  ) {
    try {
      await this.authService.signUp({
        birthday,
        cep,
        cpf,
        email,
        name,
        password,
        phone
      })

      alert('Sucesso')

      this.router.navigate(['/login'])
    } catch (error) {
      alert('Erro')
    }
  }
}
