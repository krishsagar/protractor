
describe('1st sdrc-KSP test',function()
{
    const kspUrl = 'http://182.73.49.106:8080/ksp/';
    const UsernameTextBox = element(by.xpath('//input[@name="username"]'));
    const PasswordTextBox = element(by.xpath('//input[@name="password"]'));
    const loginLink = element(by.xpath('//a[text()="Login"]'));
    const loginButton = element(by.xpath('//button[text()="Login"]'));
    const logoutButton = element(by.xpath('//a[text()="Logout"]'));
    const forgotPasswordLink = element(by.xpath('//div[contains(text(),"Forgot password")]'));
    const  emailIdTextBox= element(by.xpath('//input[@placeholder="Enter Email ID"]'));
    const  sendButton= element(by.xpath('//button[text()="Send"]'));
    const  cancelButton= element(by.xpath('//button[text()="Cancel"]'));
    const  ChangePasswordLink= element(by.xpath('//a[text()="Change password"]'));

    const  userNameTextBox= element(by.xpath('//input[@name="user-name"]'));
    const  oldPasswordTextBox= element(by.xpath('//input[@name="oldPassword"]'));
    const  newPasswordTextBox= element(by.xpath('//input[@name="password"]'));
    const  confirmPasswordTextBox= element(by.xpath('//input[@name="confirmPassword"]'));
    const  submitButton= element(by.xpath('//button[text()="Submit"]'));

    var homePageUrl='http://182.73.49.106:8080/ksp/';
    var loginPageUrl='http://182.73.49.106:8080/ksp/login';
    var profilePageUrl='http://182.73.49.106:8080/ksp/';
    var changePasswordPageUrl='http://182.73.49.106:8080/ksp/change-password';
    
    beforeEach(function() {
       browser.get(kspUrl);
        browser.driver.manage().window().maximize();
        browser.driver.manage().deleteAllCookies();
        });

    it('Enter the url and click on login link of KSP and Verify',function()
    {
      loginLink.click();
      expect(browser.getTitle()).toEqual('kspmis');
      expect(browser.getCurrentUrl()).toEqual(loginPageUrl);
    });

    it('At KSP login page, Verify that the user is logged in',function()
    {   
      loginLink.click();
      expect(browser.getTitle()).toEqual('kspmis');
     // browser.ignoreSynchronization = true;
     UsernameTextBox.sendKeys('user_2');
     PasswordTextBox.sendKeys('test@123#');
     loginButton.click();
     //browser.sleep(2000);
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toEqual(profilePageUrl);  
    //   browser.sleep(1000);
    //   expect(page.validationMessage().isDisplayed()).toBe(true);
    //   expect(page.validationMessage().isDisplayed())
    //                                  .toMatch('Please check your username and/or password and try again!');
      expect(logoutButton.isEnabled()).toBe(true);
      logoutButton.click();
    });
    it('KSP login page to home page Verify back button',function()
    {      
     loginLink.click();
      expect(browser.getTitle()).toEqual('kspmis');
      expect(browser.getCurrentUrl()).toEqual(loginPageUrl);
     // browser.ignoreSynchronization = true;
     UsernameTextBox.sendKeys('user_22invalidUserName');
     PasswordTextBox.sendKeys('test@123#');
     loginButton.click();
     //expect(browser.getCurrentUrl()).toEqual(profilePageUrl);

//   browser.sleep(1000);
    //   expect(page.validationMessage().isDisplayed()).toBe(true);
    //   expect(page.validationMessage().isDisplayed())
    //                                  .toMatch('Please check your username and/or password and try again!');
      browser.navigate().back();
      expect(browser.getTitle()).toEqual('kspmis');
      expect(browser.getCurrentUrl()).toEqual(homePageUrl);
//       var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
//     var reporter = new HtmlScreenshotReporter({
//     dest: 'D:\pic',
//     filename: 'my-report.html',
//     captureOnlyFailedSpecs: true
//    });
    });
    it('KSP login page, Verify forgotpassWord link and page',function()
    {      
     loginLink.click();
      expect(browser.getTitle()).toEqual('kspmis');
      expect(browser.getCurrentUrl()).toEqual(loginPageUrl);
     // browser.ignoreSynchronization = true;
    //  UsernameTextBox.sendKeys('user_22invalidUserName');
    //  PasswordTextBox.sendKeys('test@123#');
    //  loginButton.click();
     //expect(browser.getCurrentUrl()).toEqual(profilePageUrl);
     forgotPasswordLink.click();
     emailIdTextBox.sendKeys('kkk@sss.com');
     sendButton.click();
     forgotPasswordLink.click();
     cancelButton.click();
//   browser.sleep(1000);
    //   expect(page.validationMessage().isDisplayed()).toBe(true);
    //   expect(page.validationMessage().isDisplayed())
    //                                  .toMatch('Please check your username and/or password and try again!');
    //   browser.navigate().back();
    //   expect(browser.getTitle()).toEqual('kspmis');
    //   expect(browser.getCurrentUrl()).toEqual(homePageUrl);
    });

    it('KSP UserProfile page, Verify Change password link and page',function()
    {      
     loginLink.click();
      expect(browser.getTitle()).toEqual('kspmis');
      expect(browser.getCurrentUrl()).toEqual(loginPageUrl);
     // browser.ignoreSynchronization = true;
      UsernameTextBox.sendKeys('user_2');
      PasswordTextBox.sendKeys('test@123#');
      loginButton.click();
       //browser.sleep(3000);
      browser.waitForAngular();
     expect(browser.getCurrentUrl()).toEqual(profilePageUrl);
      //ChangePasswordLink.click();
      browser.waitForAngular();
     // expect(browser.getCurrentUrl()).toEqual(changePasswordPageUrl);
     browser.actions().mouseMove(ChangePasswordLink).click().perform();
     expect(browser.getCurrentUrl()).toEqual(changePasswordPageUrl);
     oldPasswordTextBox.sendKeys('gdfgdf');
     newPasswordTextBox.sendKeys('12345');
     confirmPasswordTextBox.sendKeys('12345');
     submitButton.click();
//   browser.sleep(1000);
    //   expect(page.validationMessage().isDisplayed()).toBe(true);
    //   expect(page.validationMessage().isDisplayed())
    //                                  .toMatch('Please check your username and/or password and try again!');
    //   browser.navigate().back();
    //   expect(browser.getTitle()).toEqual('kspmis');
    //   expect(browser.getCurrentUrl()).toEqual(homePageUrl);
    });
});

