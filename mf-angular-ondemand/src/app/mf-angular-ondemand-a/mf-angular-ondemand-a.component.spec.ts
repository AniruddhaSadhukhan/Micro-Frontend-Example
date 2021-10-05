import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfAngularOndemandAComponent } from './mf-angular-ondemand-a.component';

describe('MfAngularOndemandAComponent', () => {
  let component: MfAngularOndemandAComponent;
  let fixture: ComponentFixture<MfAngularOndemandAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfAngularOndemandAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfAngularOndemandAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
