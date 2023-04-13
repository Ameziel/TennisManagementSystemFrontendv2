import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MoniteursService} from "../../../services/moniteurs.service";
import {Moniteur} from "../../../models/moniteur.model";

@Component({
  selector: 'app-ajouter-moniteur',
  templateUrl: './ajouter-moniteur.component.html',
  styleUrls: ['./ajouter-moniteur.component.scss']
})
export class AjouterMoniteurComponent implements OnInit {

  ajoutMoniteurFormGroup! : FormGroup;

  constructor(
    private moniteurService : MoniteursService,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.ajoutMoniteurFormGroup = this.formBuilder.group(
      {
        prenom: this.formBuilder.control(null, [Validators.required]),
        nom: this.formBuilder.control(null, [Validators.required]),
        adresse: this.formBuilder.control(null),
        email: this.formBuilder.control(null),
        telephone: this.formBuilder.control([Validators.required]),
        qualification: this.formBuilder.control(null),
      })
  };

  handleSaveMoniteur() {
    let moniteur:Moniteur = this.ajoutMoniteurFormGroup.value;
    this.moniteurService.saveMoniteur(moniteur).subscribe(
      {
        next : data => {
          alert("Le moniteur a bien été ajouté à l'application !");
          this.ajoutMoniteurFormGroup.reset();
        },
        error : err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }
}
