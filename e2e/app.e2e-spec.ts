import { JhauschildtNgfinalPage } from './app.po';

describe('jhauschildt-ngfinal App', function() {
  let page: JhauschildtNgfinalPage;

  beforeEach(() => {
    page = new JhauschildtNgfinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
