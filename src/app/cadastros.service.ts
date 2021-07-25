import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CadastroItem } from './cadastro/cadastroItem';
import { CadastroEmail } from './cadastro/CadastroEmail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  constructor(private http: HttpClient) { }

  salvar(item: CadastroItem): Observable<CadastroItem> {
    return this.http.post<CadastroItem>('http://localhost:8080/estoque/item', item)
  }

  atualizar(item: CadastroItem): Observable<any> {
    return this.http.put<CadastroItem>(`http://localhost:8080/estoque/item/${item.id}`, item)
  }

  getItens(): Observable<CadastroItem[]> {
    return this.http.get<CadastroItem[]>('http://localhost:8080/estoque/itens');
  }

  getItensById(id: number): Observable<CadastroItem> {
    return this.http.get<CadastroItem>(`http://localhost:8080/estoque/itens/${id}`);
  }

  deletar(item: CadastroItem): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/estoque/item/${item.id}`);
  }

  salvarEmail(email: CadastroEmail): Observable<CadastroEmail> {
    return this.http.post<CadastroEmail>('http://localhost:8080/estoque/email', email)
  }

  deletarEmail(email: CadastroEmail): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/estoque/email/${email.endereco}`);
  }

  getEmails(): Observable<CadastroEmail[]> {
    return this.http.get<CadastroEmail[]>('http://localhost:8080/estoque/email');
  }

  dataAtual(): string {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    return ano + '-' + mes + '-' + dia;
  }

  consultarCep(codigo: string){
    return this.http.get<any>('https://ws.apicep.com/cep.json?code=' + codigo);
  }

}