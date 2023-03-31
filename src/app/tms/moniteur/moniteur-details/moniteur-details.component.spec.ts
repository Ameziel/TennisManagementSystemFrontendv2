import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MoniteurDetailsComponent} from './moniteur-details.component';

describe('MoniteurDetailsComponent', () => {
  let component: MoniteurDetailsComponent;
  let fixture: ComponentFixture<MoniteurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoniteurDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniteurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
