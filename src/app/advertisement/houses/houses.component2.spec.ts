/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PreviewComponent } from '../preview/preview.component';
import { HousesComponent } from './houses.component';
import { AdvertisementService } from '../../services/advertisement.service';
import { Advertisement } from '../../models/advertisement';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('Houses Component integration tests', () => {
  let component: HousesComponent;
  let fixture: ComponentFixture<HousesComponent>;
  let collection;

  beforeEach(async(() => {
    collection = [];

    const newAdvertisment = new Advertisement();
    newAdvertisment.ownerFullname = 'testOwnerName';
    newAdvertisment.ownerPhone = 123;
    newAdvertisment.propertyAddress = 'testOwnerAddress';
    const newAdvertisment2 = new Advertisement();
    newAdvertisment2.ownerFullname = 'testOwnerName2';
    newAdvertisment2.ownerPhone = 12300;
    newAdvertisment2.propertyAddress = 'testOwnerAddress2';
    collection.push(newAdvertisment2);

    collection.push(newAdvertisment);
    const mockService = {
      getAdvertisementsList: () => {
        return Observable.of(collection);
      }
    };

    TestBed.configureTestingModule({
      declarations: [HousesComponent, PreviewComponent],
      imports: [],
      providers: [
        { provide: AdvertisementService, useValue: mockService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should render houses button', () => {
    let de = fixture.debugElement.query(By.css('.tabular-form'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('Houses');
  });

  it('should render correctly the one inserted house', () => {
    let de = fixture.debugElement.query(By.css('div.media'));
    let el: HTMLElement = de.nativeElement;


    expect(el.innerText).toContain('Owner full name: testOwnerName');
    expect(el.innerText).toContain('Owner phone: 123');
    expect(el.innerText).toContain('Property address: testOwnerAddress');
  });

  it('should render 2 houses when another one is inserted', () => {
    const de = fixture.debugElement.query(By.css('div.media'));
    const el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain('Owner full name: testOwnerName');
    expect(el.innerText).toContain('Owner phone: 123');
    expect(el.innerText).toContain('Property address: testOwnerAddress');

    expect(el.innerText).toContain('Owner full name: testOwnerName2');
    expect(el.innerText).toContain('Owner phone: 12300');
    expect(el.innerText).toContain('Property address: testOwnerAddress2');
  });
});