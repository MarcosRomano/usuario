import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesListarComponent } from './ajustes-listar.component';

describe('AjustesListarComponent', () => {
  let component: AjustesListarComponent;
  let fixture: ComponentFixture<AjustesListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustesListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
