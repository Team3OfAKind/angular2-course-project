/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MealCartComponent } from './meal-cart.component';

describe('MealCartComponent', () => {
  let component: MealCartComponent;
  let fixture: ComponentFixture<MealCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
