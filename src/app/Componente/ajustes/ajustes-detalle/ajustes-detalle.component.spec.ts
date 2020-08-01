import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesDetalleComponent } from './ajustes-detalle.component';

describe('AjustesDetalleComponent', () => {
  let component: AjustesDetalleComponent;
  let fixture: ComponentFixture<AjustesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
