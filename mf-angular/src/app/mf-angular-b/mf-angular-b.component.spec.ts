import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfAngularBComponent } from './mf-angular-b.component';

describe('MfAngularBComponent', () => {
  let component: MfAngularBComponent;
  let fixture: ComponentFixture<MfAngularBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfAngularBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfAngularBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
