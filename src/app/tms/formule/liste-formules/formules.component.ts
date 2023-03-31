import {Component, OnInit} from '@angular/core';
import {Formulecours} from "../../../models/formulecours.model";
import {Observable} from "rxjs";
import {FormulecoursService} from "../../../services/formulecours.service";

@Component({
  selector: 'app-formules',
  templateUrl: './formules.component.html',
  styleUrls: ['./formules.component.scss']
})
export class FormulesComponent implements OnInit {

  formules! : Observable<Array<Formulecours>>;


  constructor(private formuleCoursService: FormulecoursService) { }

  ngOnInit(): void {
    this.formules = this.formuleCoursService.getAllFormules();
  }

}
