import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentCountComponent } from './fragment-count.component';

describe('FragmentCountComponent', () => {
  let component: FragmentCountComponent;
  let fixture: ComponentFixture<FragmentCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
