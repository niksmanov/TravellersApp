import { HotelsPage } from './hotels.po';
import { browser } from 'protractor';

describe('Hotels page', function () {
    let page: HotelsPage;

    beforeEach(() => {
        page = new HotelsPage();
    });

    it('should display Hotels title', () => {
        browser.ignoreSynchronization = true;
        page.navigateTo();

        expect(page.getHotelsPageTitle()).toEqual('Hotels');
    });

    it('should check if first Hotel exist', () => {
        browser.ignoreSynchronization = true;
        page.navigateTo();

       expect(page.getFirstHotel()).toBeTruthy();
    });
});
