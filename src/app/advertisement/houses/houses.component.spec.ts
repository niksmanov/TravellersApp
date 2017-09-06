/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HousesComponent } from './houses.component';

describe('HousesComponent', () => {
  let component: HousesComponent;
  let fixture: ComponentFixture<HousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
