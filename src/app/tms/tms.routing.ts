import { Routes } from '@angular/router';
import {ElevesComponent} from "./eleve/eleves/eleves.component";
import {FormulesComponent} from "./formules/formules.component";
import {GroupesComponent} from "./groupes/groupes.component";
import {MoniteursComponent} from "./moniteurs/moniteurs.component";
import {PrestationsComponent} from "./prestations/prestations.component";
import {AjouterEleveComponent} from "./eleve/ajouter-eleve/ajouter-eleve.component";
import {EleveDetailsComponent} from "./eleve/eleve-details/eleve-details.component";
import {LoginComponent} from "./login/login.component";


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: "",
        component: LoginComponent
      },
			{
				path: 'eleves',
				component: ElevesComponent
			},
			{
				path: 'formules',
				component: FormulesComponent
			},
			{
				path: 'groupes',
				component: GroupesComponent
			},
			{
				path: 'moniteurs',
				component: MoniteursComponent
			},
      {
        path: 'prestations',
        component: PrestationsComponent
      },
      {
        path: 'ajouter-eleve',
        component: AjouterEleveComponent
      },
      {
        path: 'eleve-details/:id',
        component: EleveDetailsComponent
      },


		]
	}
];
