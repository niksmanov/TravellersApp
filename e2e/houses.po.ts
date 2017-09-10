import { browser, element, by, Key } from 'protractor';

export class HousesPage {

    navigateTo() {
        return browser.get('/advertisement/houses');
    }

    getHousesPageTitle() {
        return element(by.tagName('legend')).getText();
    }

    getFirstHouse() {
        return element(by.className('list-group-item'));
    }
}
