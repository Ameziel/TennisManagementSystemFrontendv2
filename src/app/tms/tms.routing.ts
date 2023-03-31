import {Routes} from '@angular/router';
import {ElevesComponent} from "./eleve/liste-eleves/eleves.component";
import {FormulesComponent} from "./formule/liste-formules/formules.component";
import {GroupesComponent} from "./groupes/groupes.component";
import {PrestationsComponent} from "./prestation/prestations.component";
import {AjouterEleveComponent} from "./eleve/ajouter-eleve/ajouter-eleve.component";
import {EleveDetailsComponent} from "./eleve/eleve-details/eleve-details.component";
import {LoginComponent} from "./login/login.component";
import {AjouterFormuleComponent} from "./formule/ajouter-formule/ajouter-formule.component";
import {FormuleDetailsComponent} from "./formule/formule-details/formule-details.component";
import {MoniteursComponent} from "./moniteur/liste-moniteurs/moniteurs.component";


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
      // ===================== ELEVES =====================
			{
				path: 'eleves',
				component: ElevesComponent
			},
      {
        path: 'ajouter-eleve',
        component: AjouterEleveComponent
      },
      {
        path: 'eleve-details/:id',
        component: EleveDetailsComponent
      },
      // ===================================================
      // ===================== FORMULES =====================
			{
				path: 'formules',
				component: FormulesComponent
			},
      {
        path: 'ajouter-formule',
        component: AjouterFormuleComponent
      },
      {
        path: 'formule-details/:id',
        component: FormuleDetailsComponent
      },
      // ===================================================
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




		]
	}
];
