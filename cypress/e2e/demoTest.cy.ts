import loginpage from "../pages/loginpage";
import homepage from "../pages/homepage";

describe('Verify login process and check if homepage is displayed', () => {
  it('Should login and see homepage', () => {

    loginpage.visitLoginPage();
    
    loginpage.login('michaelsawrycz@gmail.com', 'Test123!');

    homepage.checkIfHomepageIsDisplayed();

    homepage.logout();
  });
});
