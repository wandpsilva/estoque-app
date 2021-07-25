import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroFormComponent } from './cadastro-form/cadastro-form.component'; 
import { EmailFormComponent } from './email-form/email-form.component';
import { ListaEmailComponent } from './lista-email/lista-email.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: 'cadastro-form', component: CadastroFormComponent },
  { path: 'cadastro-form/:id', component: CadastroFormComponent },
  { path: 'email-form', component: EmailFormComponent },
  { path: 'lista-email', component: ListaEmailComponent },
  { path: 'lista-itens', component: ListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
