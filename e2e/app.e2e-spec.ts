import { AngularRomsManagerPage } from './app.po';

describe('angular-roms-manager App', () => {
  let page: AngularRomsManagerPage;

  beforeEach(() => {
    page = new AngularRomsManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
