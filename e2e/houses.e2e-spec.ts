import { HousesPage } from './houses.po';
import { browser } from 'protractor';

describe('Houses page', function () {
    let page: HousesPage;

    beforeEach(() => {
        page = new HousesPage();
    });

    it('should display Houses title', () => {
        browser.ignoreSynchronization = true;
        page.navigateTo();

        expect(page.getHousesPageTitle()).toEqual('Houses');
    });

    it('should check if first House exist', () => {
        browser.ignoreSynchronization = true;
        page.navigateTo();

       expect(page.getFirstHouse()).toBeTruthy();
    });
});
