import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultacepComponent } from './consultacep/consultacep.component';

import { CadastroModule } from './cadastro/cadastro.module';
import { TemplateModule } from './template/template.module';

import { CadastrosService } from './cadastros.service';
import { CalculosComponent } from './calculos/calculos.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultacepComponent,
    CalculosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CadastroModule,
    TemplateModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    CadastrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
