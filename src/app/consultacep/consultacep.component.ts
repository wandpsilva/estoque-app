import { Component, OnInit } from '@angular/core';

import { CadastrosService } from '../cadastros.service';

@Component({
  selector: 'app-consultacep',
  templateUrl: './consultacep.component.html',
  styleUrls: ['./consultacep.component.css']
})
export class ConsultacepComponent implements OnInit {

  codigo: string;
  retorno: string;

  constructor(private service: CadastrosService) { }

  ngOnInit(): void {
    this.codigo = '';
  }

  onSubmit(){
    this.validaCampo();
    if(this.codigo != '') {
      this.service.consultarCep(this.codigo).subscribe(resp => {
        this.retorno = resp.address + ', ' + resp.district + ', ' + resp.city + '/' + resp.state;
        console.log(resp);
      }, errorResp => {
        this.codigo = '';
        this.retorno = 'Não foi possível obter o endereço para este CEP!';
      });
    }
  }

  validaCampo(){
    var regra = /^[0-9]+$/;
    if(this.codigo == '') {
      alert('Digite o código do CEP, mula!');
      this.codigo = '';
    } else if(!this.codigo.match(regra)) {
      alert('Existe CEP com letra mano?!');
      this.codigo = '';
    }
  }

}
