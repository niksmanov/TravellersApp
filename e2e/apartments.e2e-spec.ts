import { ApartmentsPage } from './apartments.po';
import { browser } from 'protractor';

describe('Apartments page', function () {
    let page: ApartmentsPage;

    beforeEach(() => {
        page = new ApartmentsPage();
    });

    it('should display Apartments title', () => {
        browser.ignoreSynchronization = true;
        page.navigateTo();

        expect(page.getApartmentsPageTitle()).toEqual('Apartments');
    });

    it('should check if first Apartment exist', () => {
        browser.ignoreSynchronization = true;
        page.navigateTo();

        expect(page.getFirstApartment()).toBeTruthy();
    });
});
