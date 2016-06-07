export class PROJECTNAMEPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('project-name-app h1')).getText();
  }
}
