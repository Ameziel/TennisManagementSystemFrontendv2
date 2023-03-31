import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AjouterInscriptionComponent} from './ajouter-inscription.component';

describe('AjouterInscriptionComponent', () => {
  let component: AjouterInscriptionComponent;
  let fixture: ComponentFixture<AjouterInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
