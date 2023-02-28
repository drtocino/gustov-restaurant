import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarVacacionesComponent } from './revisar-vacaciones.component';

describe('RevisarVacacionesComponent', () => {
  let component: RevisarVacacionesComponent;
  let fixture: ComponentFixture<RevisarVacacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarVacacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
