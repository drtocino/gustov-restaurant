import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibosVacacionesComponent } from './recibos-vacaciones.component';

describe('RecibosVacacionesComponent', () => {
  let component: RecibosVacacionesComponent;
  let fixture: ComponentFixture<RecibosVacacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibosVacacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibosVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
