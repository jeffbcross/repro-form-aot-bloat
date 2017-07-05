import { BigAotReproPage } from './app.po';

describe('big-aot-repro App', () => {
  let page: BigAotReproPage;

  beforeEach(() => {
    page = new BigAotReproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
