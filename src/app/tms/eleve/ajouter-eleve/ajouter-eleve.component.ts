import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Eleve} from "../../../models/eleve.model";
import {ElevesService} from "../../../services/eleves.service";

@Component({
  selector: 'app-ajouter-eleve',
  templateUrl: './ajouter-eleve.component.html',
  styleUrls: ['./ajouter-eleve.component.scss']
})
export class AjouterEleveComponent implements OnInit {

  ajoutEleveFormGroup! : FormGroup;

  constructor(
    private eleveService : ElevesService,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.ajoutEleveFormGroup = this.formBuilder.group(
      {
        prenom: this.formBuilder.control(null, [Validators.required]),
        nom: this.formBuilder.control(null, [Validators.required]),
        genre: this.formBuilder.control(null),
        email: this.formBuilder.control(null), //TODO CHECK Pk ça s'affiche dans la barre
        telephone: this.formBuilder.control(null), //TODO CHECK Pk ça s'affiche dans la barre
        dateDeNaissance: this.formBuilder.control([Validators.required]),
        details: this.formBuilder.control(null),
      })
  };

  handleSaveEleve() {
    let eleve:Eleve = this.ajoutEleveFormGroup.value;
    this.eleveService.saveEleve(eleve).subscribe(
      {
        next : data => {
          alert("L'eleve a bien été ajouté à l'application !");
          this.ajoutEleveFormGroup.reset();
        },
        error : err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
    }
      }
    );
  }
}
