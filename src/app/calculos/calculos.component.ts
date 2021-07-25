import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styleUrls: ['./calculos.component.css']
})
export class CalculosComponent implements OnInit {

  vlrPerc: number;
  vlrNum: number;
  vlrPerc2: number;
  vlrNum2: number;
  resultado: number;
  resultadoFinal: string;

  constructor() { }

  ngOnInit(): void {
  }

  calculaPorcentagem(){
    this.resultado = this.vlrNum * this.vlrPerc / 100;
    this.resultadoFinal = this.vlrPerc + "% de " + this.vlrNum + " é " + this.resultado.toFixed(0);
    this.limpar();
  }

  calculaValor(){
    this.resultado = this.vlrNum2 / this.vlrPerc2 * 100;
    this.resultadoFinal = this.vlrNum2 + " de " + this.vlrPerc2 + "% é " + this.resultado.toFixed(0);
    this.limpar();
  }

  limpar() {
    this.vlrNum = null;
    this.vlrPerc = null;
    this.vlrNum2 = null;
    this.vlrPerc2 = null;
    this.resultado = null;
  }

}
