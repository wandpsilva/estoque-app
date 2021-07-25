import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CadastrosService } from 'src/app/cadastros.service';
import { CadastroItem } from '../cadastroItem';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  cadastroItem: CadastroItem[] = [];
  itemSelecionado: CadastroItem;
  msgSucesso: string;
  msgErro: string;

  constructor(private service: CadastrosService, private router: Router) {
  }

  ngOnInit(): void {    
    this.service.getItens().subscribe(resp => {
      this.cadastroItem = resp
    });
  }

  novoCadastro(){
    this.router.navigate(['/cadastro-form']);
  }

  prepararDelecao(item: CadastroItem){
    this.itemSelecionado = item;
  }

  deletarItem(){
    this.service.deletar(this.itemSelecionado).subscribe(resp => {
      this.msgErro = null;
      this.msgSucesso = 'Produto deletado com sucesso!'
      this.ngOnInit();
    }, errorResponse =>{
      this.msgSucesso = null;
      this.msgErro = 'Não foi possível deletar o produto selecionado!'
    });
  }

}
