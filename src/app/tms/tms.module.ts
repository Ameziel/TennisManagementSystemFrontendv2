import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './tms.routing';
import {ElevesComponent} from "./eleves/eleves.component";
import {FormulesComponent} from "./formules/formules.component";
import {GroupesComponent} from "./groupes/groupes.component";
import {MoniteursComponent} from "./moniteurs/moniteurs.component";
import { PrestationsComponent } from './prestations/prestations.component';
import { AjouterEleveComponent } from './ajouter-eleve/ajouter-eleve.component';


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
    AjouterEleveComponent
  ]
})
export class ComponentsModule { }
