import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FormulecoursService} from "../../../services/formulecours.service";

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
        periode: this.formBuilder.control(null, [Validators.required]),
        typeBalle: this.formBuilder.control([Validators.required]),
      })
  };


  handleSaveFormule() {

  }
}
