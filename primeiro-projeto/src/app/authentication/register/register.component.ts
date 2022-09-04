import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
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
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  fazerRegister(){
  }

}
