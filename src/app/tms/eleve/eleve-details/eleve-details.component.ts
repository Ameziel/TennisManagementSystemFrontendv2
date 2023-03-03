import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ElevesService} from "../../../services/eleves.service";
import {Eleve} from "../../../models/eleve.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-eleve-details',
  templateUrl: './eleve-details.component.html',
  styleUrls: ['./eleve-details.component.scss']
})
export class EleveDetailsComponent implements OnInit {

  eleveId! : string;
  eleve! : Eleve;
  editEleveFormGroup! : FormGroup;

  constructor(private elevesService : ElevesService, private route : ActivatedRoute,//Permet de récupérer l'id de la route
   private formBuilder : FormBuilder) {
    this.eleveId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.elevesService.getEleveById(this.eleveId).subscribe(
      {
        next : (e) => {
          this.eleve = e;
          this.editEleveFormGroup = this.formBuilder.group(
            {
              prenom: this.formBuilder.control(this.eleve.prenom, [Validators.required]),
              nom: this.formBuilder.control(this.eleve.nom, [Validators.required]),
              genre: this.formBuilder.control(this.eleve.genre),
              email: this.formBuilder.control(this.eleve.email),
              telephone: this.formBuilder.control(this.eleve.telephone),
              dateDeNaissance: this.formBuilder.control(this.eleve.dateDeNaissance, [Validators.required]),
              details: this.formBuilder.control(this.eleve.details),
            })
        }
      }
    )
  }

  handleEditEleve() {
    let e = this.editEleveFormGroup.value;
    e.id = this.eleve.id;
    this.elevesService.updateEleve(e).subscribe(
      {
        next : (e) => {
          alert("L'élève a été mit à jours avec succès !");
        },
        error : err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }
}
