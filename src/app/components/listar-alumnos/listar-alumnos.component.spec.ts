import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ListarAlumnosComponent } from './listar-alumnos.component';

import { AlumnoService } from 'src/app/services/alumno.service';

describe('ListarAlumnosComponent', () => {
  let component: ListarAlumnosComponent;
  let fixture: ComponentFixture<ListarAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), HttpClientTestingModule],
      providers: [AlumnoService, ToastrService ],
      declarations: [ ListarAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`el metodo sum debería devolver la suma de los numeros enviados`, () => {
    let a: number = 5;
    let b: number = 11;
    let result: number = a + b;
    expect(component.sum(a, b)).toBe(result);
  })
});
