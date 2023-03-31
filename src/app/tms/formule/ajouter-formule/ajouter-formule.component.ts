import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FormulecoursService} from "../../../services/formulecours.service";
import {Formulecours} from "../../../models/formulecours.model";

@Component({
  selector: 'app-ajouter-formule',
  templateUrl: './ajouter-formule.component.html',
  styleUrls: ['./ajouter-formule.component.scss']
})
export class AjouterFormuleComponent implements OnInit {

  ajoutFormuleGroup! : any;

  constructor(    private formulecoursService : FormulecoursService,
                  private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.ajoutFormuleGroup = this.formBuilder.group(
      {
        libelle: this.formBuilder.control(null, [Validators.required]),
        effectifMaximum: this.formBuilder.control(null, [Validators.required]),
        nombreSeanceTotal: this.formBuilder.control(null, [Validators.required]),
        nombreSeanceHebdomadaire: this.formBuilder.control(null, [Validators.required]),
        dureeSeance: this.formBuilder.control(null, [Validators.required]),
        tarif: this.formBuilder.control(null, [Validators.required]),
        annee: this.formBuilder.control(null, [Validators.required]),
        dateDebut: this.formBuilder.control(null, [Validators.required]),
        dateFin: this.formBuilder.control(null, [Validators.required]),
        periode: this.formBuilder.control(null, [Validators.required]),
        typeBalle: this.formBuilder.control([Validators.required]),
      })
  };


  handleSaveFormule() {
    let formule:Formulecours = this.ajoutFormuleGroup.value;
    this.formulecoursService.saveFormuleCours(formule).subscribe(
      {
        next : data => {
          alert("La Formule de cours a bien été ajouté à l'application !");
          this.ajoutFormuleGroup.reset();
        },
        error : err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }
}
