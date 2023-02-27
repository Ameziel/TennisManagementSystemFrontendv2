import { Routes } from '@angular/router';
import {ElevesComponent} from "./eleves/eleves.component";
import {FormulesComponent} from "./formules/formules.component";
import {GroupesComponent} from "./groupes/groupes.component";
import {MoniteursComponent} from "./moniteurs/moniteurs.component";
import {PrestationsComponent} from "./prestations/prestations.component";
import {AjouterEleveComponent} from "./ajouter-eleve/ajouter-eleve.component";


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
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
      }
		]
	}
];
