import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasGruposComponent } from './tareas-grupos.component';

describe('TareasGruposComponent', () => {
  let component: TareasGruposComponent;
  let fixture: ComponentFixture<TareasGruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasGruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
