import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintwoComponent } from './maintwo.component';

describe('MaintwoComponent', () => {
  let component: MaintwoComponent;
  let fixture: ComponentFixture<MaintwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
