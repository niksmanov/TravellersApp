import { browser, element, by, Key } from 'protractor';

export class HotelsPage {

    navigateTo() {
        return browser.get('/advertisement/hotels');
    }

    getHotelsPageTitle() {
        return element(by.tagName('legend')).getText();
    }

    getFirstHotel() {
        return element(by.className('list-group-item'));
    }
}
