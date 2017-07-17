import { MoshPage } from './app.po';

describe('mosh App', () => {
  let page: MoshPage;

  beforeEach(() => {
    page = new MoshPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
