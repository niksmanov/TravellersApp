/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Advertisement } from '../models/advertisement';
import { ProfileComponent } from './profile.component';

describe('Profile Component', () => {
  let component: ProfileComponent;
  let service;
  let authService;
  let testAdv: Advertisement;

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
      },
      createAdvertisement: ()=>{
        
      },
      deleteAdvertisement: ()=>{

      }
    };

    authService = {
        currentUserDisplayEmail: 'testingEmailUser'
    };

    testAdv = new Advertisement();

    component = new ProfileComponent(authService, service);
  });

  it('ngOnInit() should call method getAdvertisementsList once', () => {
      spyOn(service, 'getAdvertisementsList');
      component.ngOnInit();
      component.ngOnInit();
      expect(service.getAdvertisementsList).toHaveBeenCalledTimes(2);
  });

  it('ngOnInit() should call method getAdvertisementsList once with correct parameters', () => {
      spyOn(service, 'getAdvertisementsList');
      component.ngOnInit();
      
      expect(service.getAdvertisementsList).toHaveBeenCalledWith(
        {
          orderByChild: 'ownerEmail',
          equalTo: 'testingEmailUser'
        }
      );
  });

  it('ngOnInit() should create return correct result and inicialize correctly', () => {
    component.ngOnInit();
    expect(component.advertisementsList).toBeTruthy();
  });

  it('ngOnInit() should create return correct email', () => {
    component.ngOnInit();
    expect(component.advertisementsList[0].onwerEmail).toEqual('testEmail@test.bg');
  });

  it('ngOnInit() should create return correct full name', () => {
    component.ngOnInit();
    expect(component.advertisementsList[0].ownerFullname).toEqual('test full name');
  });

  it('ngOnInit() should create return correct phone', () => {
    component.ngOnInit();
    expect(component.advertisementsList[0].ownerPhone).toEqual('0123124525');
  });

  it('ngOnInit() should create return correct propertyPrice', () => {
    component.ngOnInit();
    expect(component.advertisementsList[0].propertyPrice).toEqual(123);
  });

  it('createAdvertisement() should reset advertisment', () => {
    component.createAdvertisement();
    expect(component.advertisement.ownerEmail).toEqual(undefined);
  });

  it('createAdvertisement() should call createAdvertisment', () => {
    spyOn(service,'createAdvertisement');
    component.createAdvertisement();
    expect(service.createAdvertisement).toHaveBeenCalledTimes(1);
  });
it('deleteAdvertisement() should call deleteAdvertisement', () => {
    spyOn(service,'deleteAdvertisement');
    component.deleteAdvertisement(testAdv);
    expect(service.deleteAdvertisement).toHaveBeenCalledTimes(1);
  });
});
