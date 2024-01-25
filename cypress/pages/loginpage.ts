class LoginPage {
    private usernameInput: string = 'input[name="username"]';
    private passwordInput: string = 'input[name="password"]';
    private loginButton: string = 'input[type="submit"]';
  
    visitLoginPage() {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
    }
  
    fillUsername(username: string) {
        cy.get(this.usernameInput).type(username);
    }
  
    fillPassword(password: string) {
      cy.get(this.passwordInput).type(password);
    }
  
    clickLoginButton() {
      cy.get(this.loginButton).click();
    }
  
    login(username: string, password: string) {
      this.fillUsername(username);
      this.fillPassword(password);
      this.clickLoginButton();
    }
  }
  
  export default new LoginPage();
  