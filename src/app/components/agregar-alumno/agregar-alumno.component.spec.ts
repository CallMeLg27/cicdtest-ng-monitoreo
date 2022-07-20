import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { AgregarAlumnoComponent } from './agregar-alumno.component';
import { AlumnoService } from 'src/app/services/alumno.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from  '@angular/router/testing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AgregarAlumnoComponent', () => {
  let component: AgregarAlumnoComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), NgbModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [AlumnoService, ToastrService ],
      declarations: [ AgregarAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
