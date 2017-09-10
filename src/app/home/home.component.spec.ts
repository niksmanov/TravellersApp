/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('Navigation Component integration tests', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should render home button', () => {
      const de = fixture.debugElement.query(By.css('#legend'));
      const el: HTMLElement = de.nativeElement;

      expect(el.innerText).toContain('Home');
  });

  it('should render photos on right interval', () => {
      const de = fixture.debugElement.query(By.css('#carousel-travellersApp'));

      expect(de.attributes['data-interval']).toEqual('3000');
  });
});
