import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListeInscriptionformuleComponent} from './liste-inscriptionformule.component';

describe('ListeInscriptionformuleComponent', () => {
  let component: ListeInscriptionformuleComponent;
  let fixture: ComponentFixture<ListeInscriptionformuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeInscriptionformuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInscriptionformuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
