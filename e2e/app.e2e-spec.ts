import { AdzuInfluencerMarketingTemplatePage } from './app.po';

describe('AdzuInfluencerMarketing App', function() {
  let page: AdzuInfluencerMarketingTemplatePage;

  beforeEach(() => {
    page = new AdzuInfluencerMarketingTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
