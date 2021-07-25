import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { ListaEmailComponent } from './lista-email/lista-email.component';

@NgModule({
  declarations: [
    CadastroFormComponent,
    CadastroComponent,
    ListaComponent,
    EmailFormComponent,
    ListaEmailComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormsModule
  ],
  exports: [
    CadastroComponent,
    CadastroFormComponent,
    EmailFormComponent,
    ListaComponent
  ]
})
export class CadastroModule { }
