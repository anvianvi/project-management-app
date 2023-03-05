import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroscreenComponent } from './heroscreen.component';

describe('HeroscreenComponent', () => {
  let component: HeroscreenComponent;
  let fixture: ComponentFixture<HeroscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
