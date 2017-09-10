import { RegisterPage } from './register.po';
import { browser } from 'protractor';

describe('Log in page', () => {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
  });

  it('should display Register title', () => {
    browser.ignoreSynchronization = true;
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Register');
  });
});
