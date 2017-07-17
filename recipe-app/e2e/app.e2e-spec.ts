import { RecipeAppPage } from './app.po';

describe('recipe-app App', () => {
  let page: RecipeAppPage;

  beforeEach(() => {
    page = new RecipeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
