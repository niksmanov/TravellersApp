import { browser, by, element } from 'protractor';

export class RegisterPage {
    navigateTo() {
        return browser.get('/register');
    }

    getTitleText() {
        return element(by.tagName('legend')).getText();
    }
}
