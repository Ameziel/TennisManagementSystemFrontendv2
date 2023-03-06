import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormuleComponent } from './ajouter-formule.component';

describe('AjouterFormuleComponent', () => {
  let component: AjouterFormuleComponent;
  let fixture: ComponentFixture<AjouterFormuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFormuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFormuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
