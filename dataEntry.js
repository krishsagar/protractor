

describe('1st sdrc-KSP test',function()
{
    const kspUrl = 'http://192.168.1.8:8080/ksp-de/#/login';
    const emailTextBox = element(by.xpath('//input[@type="email"]'));
    const PasswordTextBox = element(by.xpath('//input[@type="password"]'));
    const loginButton = element(by.xpath('//span[text()="Login"]'));
    var profilePageUrl='http://192.168.1.8:8080/ksp-de/#/home';
    const anganwadiFormLink = element(by.xpath('//div[text()="Anganwadi Form"]'));
    const schoolProfileFormLink = element(by.xpath('//div[text()="School Profile"]'));
    const houseHoldSurveyFormLink = element(by.xpath('//div[text()="HouseHold Survey"]'));
    var anganwadiPageUrl='http://192.168.1.8:8080/ksp-de/#/anganwadi-list';
    var schoolProfilePageUrl='';
    var houseHoldSurveyPageUrl='';
    const createButton = element(by.xpath('(//button/span)[4]/ion-icon'));
    var anganwadiProfilePageUrl='http://192.168.1.8:8080/ksp-de/#/anganwadi';
    //var anganwadiCenterNumberList='//ion-label[text()="Anganwadi centre number"]/../../../../../..';
    var anganwadiCenterNumber='//ion-label[text()="Anganwadi centre number"]';

    //ion-label[text()='Anganwadi centre number']/../../../../../..

    
    beforeEach(function() {
       browser.get(kspUrl);
        browser.driver.manage().window().maximize();
        browser.driver.manage().deleteAllCookies();


        expect(browser.getTitle()).toEqual('Ionic App');
        //expect(browser.getCurrentUrl()).toEqual(loginPageUrl);
        emailTextBox.clear();
        emailTextBox.sendKeys('krishna');
        PasswordTextBox.clear();
        PasswordTextBox.sendKeys('sagar');
        loginButton.click();
          //browser.sleep(3000);
          browser.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual(profilePageUrl);



        });

    it('Enter the url and click on login link of KSP and Verify',function()
    {
     // loginLink.click();
      expect(browser.getTitle()).toEqual('Ionic App');
      //expect(browser.getCurrentUrl()).toEqual(loginPageUrl);
    });

    // it('Ionic App login Verify',function()
    // {
    //  // loginLink.click();
    //   expect(browser.getTitle()).toEqual('Ionic App');
    //   //expect(browser.getCurrentUrl()).toEqual(loginPageUrl);
    //   emailTextBox.clear();
    //   emailTextBox.sendKeys('krishna');
    //   PasswordTextBox.clear();
    //   PasswordTextBox.sendKeys('sagar');
    //   loginButton.click();
    //     //browser.sleep(3000);
    //     browser.waitForAngular();
    //   expect(browser.getCurrentUrl()).toEqual(profilePageUrl);

    // });



    it('Ionic App Anganwadi Form Verify',function()
    {
     //anganwadiFormLink.click();

     browser.actions().mouseMove(anganwadiFormLink).click().perform();
     browser.sleep(3000);
     browser.waitForAngular();
     expect(browser.getCurrentUrl()).toEqual(anganwadiPageUrl);
     //browser.actions().mouseMove(createButton).click().perform();
     browser.executeScript("arguments[0].click()",createButton.getWebElement());
     browser.sleep(3000);
     browser.waitForAngular();
     expect(browser.getCurrentUrl()).toEqual(anganwadiProfilePageUrl);
     browser.sleep(3600);
     browser.waitForAngular();

     browser.actions().
    mouseMove(anganwadiCenterNumber).
    mouseMove({x: 240, y: 240}).
    doubleClick().
    perform();
     //anganwadiCenterNumber.click();
     // browser.actions().mouseMove(anganwadiCenterNumber).click().build().perform();
     //browser.executeScript("arguments[0].click()",anganwadiCenterNumber.getWebElement());
    //browser.driver.touchActions().tap(anganwadiCenterNumber).perform();  
    });

    // it('Ionic App school Profile Form Verify',function()
    // {
    //    // schoolProfileFormLink.click();
    //      //browser.sleep(3000);
    //      browser.waitForAngular();
    //     //expect(browser.getCurrentUrl()).toEqual(profilePageUrl);
    // });

    // it('Ionic App house Hold Survey Form Verify',function()
    // {
    //     //houseHoldSurveyFormLink.click();
    //      //browser.sleep(3000);
    //      browser.waitForAngular();
    //     //expect(browser.getCurrentUrl()).toEqual(profilePageUrl);
    // });

});
