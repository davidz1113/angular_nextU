import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasHoyComponent } from './tareas-hoy.component';

describe('TareasHoyComponent', () => {
  let component: TareasHoyComponent;
  let fixture: ComponentFixture<TareasHoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasHoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
