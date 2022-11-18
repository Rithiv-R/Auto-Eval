import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFacComponent } from './login-fac.component';

describe('LoginFacComponent', () => {
  let component: LoginFacComponent;
  let fixture: ComponentFixture<LoginFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
