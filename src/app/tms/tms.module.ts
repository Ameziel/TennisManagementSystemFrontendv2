import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './tms.routing';
import {ElevesComponent} from "./eleve/eleves/eleves.component";
import {FormulesComponent} from "./formules/formules.component";
import {GroupesComponent} from "./groupes/groupes.component";
import {MoniteursComponent} from "./moniteurs/moniteurs.component";
import { PrestationsComponent } from './prestations/prestations.component';
import { AjouterEleveComponent } from './eleve/ajouter-eleve/ajouter-eleve.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { EleveDetailsComponent } from './eleve/eleve-details/eleve-details.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    ElevesComponent,
    FormulesComponent,
    GroupesComponent,
    MoniteursComponent,
    PrestationsComponent,
    AjouterEleveComponent,
    InscriptionsComponent,
    EleveDetailsComponent,
    LoginComponent
  ]
})
export class ComponentsModule { }
