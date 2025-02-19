import { expect, locator, page } from "@playwright/test";
exports.login = class login {

    constructor(page) 
    {
        this.page = page;
        this.homePageLogoLocator = page.locator("//*[@id='Logo-harold']");
        this.loginTextLocator= page?.locator("//p[normalize-space()='Log in']");
        this.emailFieldLocator= page?.locator("//input[@name='email']");
        this.passwordFieldLocator= page?.locator("//input[@name='password']");
        this.viewPasswordLocator= page?.locator("//span[@class='MuiIconButton-label']//*[name()='svg']");
        this.logInButtonLocator= page?.locator("//button[@type='submit']//span[@class='MuiButton-label']");
        this.logInMicrosoftLocator= page?.locator("//span[contains(text(),'Login with Microsoft')]");
        this.logInGoogleLocator= page?.locator("//span[contains(text(),'Login with Google')]");
        this.emailValidationLocator= page?.locator("(//div[contains(text(),'Required')])");
        this.passwordValidationLocator= page?.locator("(//div[contains(text(),'Required')])");



    }
  
    async viewLogo() {
       await expect(this.homePageLogoLocator).toBeVisible();
    }
  
    async viewloginText() {
        await expect(this.loginTextLocator).toBeVisible();
     }

     async viewEmailField() {
        await expect(this.emailFieldLocator).toBeVisible();
    }
    async enterEmailField(email) {
        await this.emailFieldLocator.fill(email);
    }
    async viewPasswordField() {
        await expect(this.passwordFieldLocator).toBeVisible();
    }
    async enterPasswordField(password) {
        await expect(this.passwordFieldLocator).fill(password);
    }
    
    async viewPasswordIcon() {
        await expect(this.viewPasswordLocator).toBeVisible();
    }
    
    async clickLogInButton() {
        await this.logInButtonLocator.click();
    }
    
    async viewLogInWithMicrosoft() {
        await expect(this.logInMicrosoftLocator).toBeVisible();
    }
    
    async viewLogInWithGoogle() {
        await expect(this.logInGoogleLocator).toBeVisible();
    }
    
    async viewEmailValidation() {
        await expect(this.emailValidationLocator).toBeVisible();
    }
    
    async viewPasswordValidation() {
        await expect(this.passwordValidationLocator).toBeVisible();
    }
    
   
  
  };

  
  