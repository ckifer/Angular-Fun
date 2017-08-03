import { AngularFunPage } from './app.po';

describe('angular-fun App', () => {
  let page: AngularFunPage;

  beforeEach(() => {
    page = new AngularFunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
