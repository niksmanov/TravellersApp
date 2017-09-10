import { LoginPage } from './login.po';
import { browser } from 'protractor';

describe('Log in page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display Log in title', () => {
    browser.ignoreSynchronization = true;
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Log in');
  });
});
