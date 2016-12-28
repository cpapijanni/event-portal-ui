import { EventPortalUiPage } from './app.po';

describe('event-portal-ui App', function() {
  let page: EventPortalUiPage;

  beforeEach(() => {
    page = new EventPortalUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
