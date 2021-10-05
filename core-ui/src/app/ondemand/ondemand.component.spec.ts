import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndemandComponent } from './ondemand.component';

describe('OndemandComponent', () => {
  let component: OndemandComponent;
  let fixture: ComponentFixture<OndemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OndemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OndemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
