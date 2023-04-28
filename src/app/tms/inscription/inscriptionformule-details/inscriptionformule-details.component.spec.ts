import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InscriptionformuleDetailsComponent} from './inscriptionformule-details.component';

describe('InscriptionformuleDetailsComponent', () => {
  let component: InscriptionformuleDetailsComponent;
  let fixture: ComponentFixture<InscriptionformuleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionformuleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionformuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
