import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfAngularAComponent } from './mf-angular-a.component';

describe('MfAngularAComponent', () => {
  let component: MfAngularAComponent;
  let fixture: ComponentFixture<MfAngularAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfAngularAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfAngularAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
