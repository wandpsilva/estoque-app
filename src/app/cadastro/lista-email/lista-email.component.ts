import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CadastroEmail } from '../CadastroEmail';
import { CadastrosService } from '../../cadastros.service';

@Component({
  selector: 'app-lista-email',
  templateUrl: './lista-email.component.html',
  styleUrls: ['./lista-email.component.css']
})
export class ListaEmailComponent implements OnInit {

  listaEmail: CadastroEmail[];
  emailSelecionado: CadastroEmail;
  msgSucesso: string;
  msgErro: string;

  constructor(private service: CadastrosService, private router: Router) { }

  ngOnInit(): void {    
    this.service.getEmails().subscribe(resp => {
      this.listaEmail = resp
    });
  }

  deletarEmail() {
    this.service.deletarEmail(this.emailSelecionado).subscribe(resp => {
      this.msgErro = null;
      this.msgSucesso = 'Email deletado com sucesso!'
      this.ngOnInit();
    }, errorResponse => {
      this.msgSucesso = null;
      this.msgErro = 'Não foi possível deletar o email selecionado!'
    });
  }

  prepararDelecao(email: CadastroEmail) {
    this.emailSelecionado = email;
  }

  novoEmail(){
    this.router.navigate(['/email-form'])
  }

}
