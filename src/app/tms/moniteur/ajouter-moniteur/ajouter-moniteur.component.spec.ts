import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AjouterMoniteurComponent} from './ajouter-moniteur.component';

describe('AjouterMoniteurComponent', () => {
  let component: AjouterMoniteurComponent;
  let fixture: ComponentFixture<AjouterMoniteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMoniteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
