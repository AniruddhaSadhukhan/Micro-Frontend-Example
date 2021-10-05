import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfAngularOndemandBComponent } from './mf-angular-ondemand-b.component';

describe('MfAngularOndemandBComponent', () => {
  let component: MfAngularOndemandBComponent;
  let fixture: ComponentFixture<MfAngularOndemandBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfAngularOndemandBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfAngularOndemandBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
