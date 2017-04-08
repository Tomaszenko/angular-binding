import { BindingAppPage } from './app.po';

describe('binding-app App', () => {
  let page: BindingAppPage;

  beforeEach(() => {
    page = new BindingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
