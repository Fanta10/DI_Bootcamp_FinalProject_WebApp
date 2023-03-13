import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffectationRoutingModule } from './affectation-routing.module';
import { AffectationComponent } from './components/affectation/affectation.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { ListeReclamationComponent } from './components/liste-reclamation/liste-reclamation.component';


@NgModule({
  declarations: [
    AffectationComponent,
    ReclamationComponent,
    ListeReclamationComponent
  ],
  imports: [
    CommonModule,
    AffectationRoutingModule
  ]
})
export class AffectationModule { }
