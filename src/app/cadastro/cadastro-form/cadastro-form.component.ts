import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CadastroItem } from '../cadastroItem';
import { CadastrosService } from '../../cadastros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  cadastroItem: CadastroItem;
  success: boolean = false;
  errors: string[];
  id: number;

  constructor(private service: CadastrosService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.cadastroItem = new CadastroItem();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getItensById(this.id).subscribe(resp => {
          this.cadastroItem = resp
        }, errorResponse => {
          this.cadastroItem = new CadastroItem()
        });
      }
    })
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.cadastroItem).subscribe(resp => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o item!']
      });
    } else {
      this.service.salvar(this.cadastroItem).subscribe(resp => {
        this.success = true;
        this.errors = null;
        this.cadastroItem = resp;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
    }
  }

}
