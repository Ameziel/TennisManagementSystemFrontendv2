import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Moniteur} from "../../../models/moniteur.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MoniteursService} from "../../../services/moniteurs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-moniteurs',
  templateUrl: './moniteurs.component.html',
  styleUrls: ['./moniteurs.component.scss']
})
export class MoniteursComponent implements OnInit {

  moniteurs!: Observable<Array<Moniteur>>;
  errorMessage: string | undefined;
  searchformGroup!: FormGroup;

  constructor(private moniteurService: MoniteursService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.searchformGroup = this.formBuilder.group(
      {
        keyword: this.formBuilder.control("")
      }
    )
    this.moniteurs = this.moniteurService.getAllMoniteurs();
  }

  handleSearchMoniteur() {
    let keywordInput = this.searchformGroup?.value.keyword;
    this.moniteurs = this.moniteurService.searchMoniteurByName(keywordInput);
  }

  handleSuppressionMoniteur(moniteur: Moniteur) {
    let confirmation = confirm("Voulez vous vraiment supprimer cet eleve ?");
    if (!confirmation) return;
    this.moniteurService.deleteMoniteur(moniteur.id).subscribe(
      {
        next: (resp: Object) => {
          this.handleSearchMoniteur();
        }
      }
    )
  }

  handleEditMoniteur(moniteur: Moniteur) {
    this.router.navigateByUrl("/tms/moniteur-details/" + moniteur.id);
  }

}

