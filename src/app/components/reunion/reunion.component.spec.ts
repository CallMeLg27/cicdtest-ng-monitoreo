import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from  '@angular/router/testing'
import { ReunionComponent } from './reunion.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

describe('ReunionComponent', () => {
  let component: ReunionComponent;
  let fixture: ComponentFixture<ReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), HttpClientTestingModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [ToastrService ],
      declarations: [ ReunionComponent, NgbTypeahead ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
