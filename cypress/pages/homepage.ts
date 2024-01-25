class HomePage {
    private homepageDisplayVerificator: string = '#accountTable';
    private logoutButton: string = 'a[href*="logout"]';
  
    checkIfHomepageIsDisplayed() {
      cy.get(this.homepageDisplayVerificator).should('be.visible');
    }
  
    clickLogoutButton() {
      cy.get(this.logoutButton).click();
    }
  
    logout() {
      this.clickLogoutButton();
    }
  }
  
  export default new HomePage();
  