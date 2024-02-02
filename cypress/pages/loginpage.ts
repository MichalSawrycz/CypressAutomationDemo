class LoginPage {
    private usernameInput: string = "input[data-qa='login-email']";
    private passwordInput: string = "input[data-qa='login-password']";
    private loginButton: string = "button[data-qa='login-button']";
  
    visitLoginPage() {
      cy.visit('https://automationexercise.com/login');
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
  