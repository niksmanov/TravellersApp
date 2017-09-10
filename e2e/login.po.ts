import { browser, by, element } from 'protractor';

export class LoginPage {
    navigateTo() {
        return browser.get('/login');
    }

    getTitleText() {
        return element(by.tagName('legend')).getText();
    }
}
