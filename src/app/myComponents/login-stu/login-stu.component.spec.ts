import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStuComponent } from './login-stu.component';

describe('LoginStuComponent', () => {
  let component: LoginStuComponent;
  let fixture: ComponentFixture<LoginStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginStuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
