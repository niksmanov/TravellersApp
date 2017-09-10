import { HomePage } from './home.po';
import { browser } from 'protractor';

describe('Home page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display Home title', () => {
    browser.ignoreSynchronization = true;
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Home');
  });
});
