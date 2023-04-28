import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AjouterInscriptionformuleComponent} from './ajouter-inscriptionformule.component';

describe('AjouterInscriptionformuleComponent', () => {
  let component: AjouterInscriptionformuleComponent;
  let fixture: ComponentFixture<AjouterInscriptionformuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterInscriptionformuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterInscriptionformuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
