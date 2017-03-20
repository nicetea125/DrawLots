import { Ng4WebPage } from './app.po';

describe('ng4-web App', () => {
  let page: Ng4WebPage;

  beforeEach(() => {
    page = new Ng4WebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
