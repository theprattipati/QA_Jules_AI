import { expect, test } from "@playwright/test";

export class Login  {

    constructor(page) 
    {
        this.page = page;
        this.homePageLogoLocator = this.page.locator("//*[@id='Logo-harold']");
        this.loginTextLocator= this.page.locator("//p[normalize-space()='Log in']");
        this.emailFieldLocator= this.page.locator("//input[@name='email']");
        this.passwordFieldLocator= this.page.locator("//input[@name='password']");
        this.viewPasswordLocator= this.page.locator("//span[@class='MuiIconButton-label']//*[name()='svg']");
        this.logInButtonLocator= this.page.locator("//button[@type='submit']//span[@class='MuiButton-label']");
        this.logInMicrosoftLocator= this.page.locator("//span[contains(text(),'Login with Microsoft')]");
        this.logInGoogleLocator= this.page.locator("//span[contains(text(),'Login with Google')]");
        this.emailValidationLocator= this.page.locator("(//div[contains(text(),'Required')])");
        this.passwordValidationLocator= this.page.locator("(//div[contains(text(),'Required')])");



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
    async clickEmailField() {
        await this.emailFieldLocator.click();
    }
    async viewPasswordField() {
        await expect(this.passwordFieldLocator).toBeVisible();
    }
    
    async clickPasswordField() {
        await this.passwordFieldLocator.click();
    }
    async enterPasswordField(password) {
        await this.passwordFieldLocator.fill(password);
    }
    
    async viewPasswordIcon() {
        await expect(this.viewPasswordLocator).toBeVisible();
    }
    async clickPasswordIcon() {
        await this.viewPasswordLocator.click();
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

  
  