import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ComponentsRoutes} from './tms.routing';
import {ElevesComponent} from "./eleve/liste-eleves/eleves.component";
import {FormulesComponent} from "./formule/liste-formules/formules.component";
import {GroupesComponent} from "./groupes/groupes.component";
import {PrestationsComponent} from './prestation/prestations.component';
import {AjouterEleveComponent} from './eleve/ajouter-eleve/ajouter-eleve.component';
import {EleveDetailsComponent} from './eleve/eleve-details/eleve-details.component';
import {LoginComponent} from './login/login.component';
import {AjouterFormuleComponent} from './formule/ajouter-formule/ajouter-formule.component';
import {FormuleDetailsComponent} from './formule/formule-details/formule-details.component';
import {AjouterMoniteurComponent} from './moniteur/ajouter-moniteur/ajouter-moniteur.component';
import {MoniteurDetailsComponent} from './moniteur/moniteur-details/moniteur-details.component';
import {MoniteursComponent} from './moniteur/liste-moniteurs/moniteurs.component';
import {
  AjouterInscriptionformuleComponent
} from './inscription/ajouter-inscriptionformule/ajouter-inscriptionformule.component';
import {
  ListeInscriptionformuleComponent
} from './inscription/liste-inscriptionformule/liste-inscriptionformule.component';
import {
  InscriptionformuleDetailsComponent
} from './inscription/inscriptionformule-details/inscriptionformule-details.component';


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
    PrestationsComponent,
    AjouterEleveComponent,
    EleveDetailsComponent,
    LoginComponent,
    AjouterFormuleComponent,
    FormuleDetailsComponent,
    AjouterMoniteurComponent,
    MoniteurDetailsComponent,
    MoniteursComponent,
    AjouterInscriptionformuleComponent,
    ListeInscriptionformuleComponent,
    InscriptionformuleDetailsComponent,
  ]
})
export class ComponentsModule { }
