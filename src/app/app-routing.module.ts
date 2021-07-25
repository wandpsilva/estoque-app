import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculosComponent } from './calculos/calculos.component';
import { ConsultacepComponent } from './consultacep/consultacep.component';
import { ContatoComponent } from './contato/contato.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consultacep', component: ConsultacepComponent },
  { path: 'calculos', component: CalculosComponent },
  { path: 'contato', component: ContatoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
