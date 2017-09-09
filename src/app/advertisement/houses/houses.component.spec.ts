/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HousesComponent } from './houses.component';

describe('Houses Component', () => {
  let component: HousesComponent;
  let service;  
  let result = [{
              onwerEmail: 'testEmail@test.bg',
              ownerFullname: 'test full name',
              ownerPhone: '0123124525',
              propertyAdress: 'test adress',
              roomsCount: 2,
              bedsCount: 3,
              propertyPrice: 123,
              description: 'test description'
          }];

  beforeEach(() => {

  service =
    // tslint:disable-next-line:one-line
    {
      getAdvertisementsList: ({orderByChild: propertyType, equalTo: apartment})=>{
          return result;
      }
    };

    component = new HousesComponent(service);
  });

  it('should call method getAdvertisementsList once', () => {
      spyOn(service, 'getAdvertisementsList');
      component.ngOnInit();
      component.ngOnInit();
      expect(service.getAdvertisementsList).toHaveBeenCalledTimes(2);
  });

  it('should call method getAdvertisementsList once with correct parameters', () => {
      spyOn(service, 'getAdvertisementsList');
      component.ngOnInit();
      expect(service.getAdvertisementsList).toHaveBeenCalledWith(
        {
          orderByChild: 'propertyType',
          equalTo: 'House'
        }
      );
  });

  it('should create return correct result and inicialize correctly', () => {
    component.ngOnInit();
    expect(component.advertisements).toBeTruthy();
  });

  it('should create return correct email', () => {
    component.ngOnInit();
    expect(component.advertisements[0].onwerEmail).toEqual('testEmail@test.bg');
  });

  it('should create return correct full name', () => {
    component.ngOnInit();
    expect(component.advertisements[0].ownerFullname).toEqual('test full name');
  });

  it('should create return correct phone', () => {
    component.ngOnInit();
    expect(component.advertisements[0].ownerPhone).toEqual('0123124525');
  });

  it('should create return correct propertyPrice', () => {
    component.ngOnInit();
    expect(component.advertisements[0].propertyPrice).toEqual(123);
  });
});
