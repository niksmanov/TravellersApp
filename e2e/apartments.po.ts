import { browser, element, by, Key } from 'protractor';

export class ApartmentsPage {

    navigateTo() {
        return browser.get('/advertisement/apartments');
    }

    getApartmentsPageTitle() {
        return element(by.tagName('legend')).getText();
    }

    getFirstApartment() {
        return element(by.className('list-group-item'));
    }
}
