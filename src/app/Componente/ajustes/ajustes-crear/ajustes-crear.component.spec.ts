import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesCrearComponent } from './ajustes-crear.component';

describe('AjustesCrearComponent', () => {
  let component: AjustesCrearComponent;
  let fixture: ComponentFixture<AjustesCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustesCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
