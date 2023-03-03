import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ElevesService} from "../../../services/eleves.service";
import {Observable} from "rxjs";
import {Eleve} from "../../../models/eleve.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.scss']
})
export class ElevesComponent implements OnInit {

  eleves! : Observable<Array<Eleve>>;
  errorMessage : string | undefined;
  searchformGroup! : FormGroup;

  constructor(private eleveService: ElevesService, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.searchformGroup = this.formBuilder.group(
      {
        keyword : this.formBuilder.control("")
      }
    )
    this.eleves = this.eleveService.getAllEleves();
  }

  handleSearchEleves() {
    let keywordInput = this.searchformGroup?.value.keyword;
    this.eleves = this.eleveService.searchElevesByName(keywordInput);
  }

  handleSuppressionEleve(eleve: Eleve) {
    let confirmation = confirm("Voulez vous vraiment supprimer cet eleve ?");
    if(!confirmation) return;
    this.eleveService.deleteEleve(eleve.id).subscribe(
      {
        next : (resp : Object) => {
          this.handleSearchEleves();
        }
      }
    )
  }

  handleEditEleve(eleve: Eleve) {
    this.router.navigateByUrl("/tms/eleve-details/" + eleve.id);
  }
}
