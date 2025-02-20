import { Login } from '../pageObjects/loginPage.js';
import { beforeEach, test, expect } from '@playwright/test';
import loginData from '../fixtures/loginData.json';

beforeEach(async ({ page }) => {
    try {
        await page.goto('https://demo.haroldwaste.com/');
    } catch (error) {
        console.error("Error navigating to the website:", error);
    }
});

test('Verify that user is able to login with correct test data', async ({ page }) => {
    try {
        const loginPage = new Login(page);

        await loginPage.viewLogo();
        await loginPage.viewloginText();
        await loginPage.viewEmailField();
        await loginPage.enterEmailField(loginData.email);
        await loginPage.viewPasswordField();
        await loginPage.enterPasswordField(loginData.password);
        await loginPage.viewPasswordIcon();
        await loginPage.clickPasswordIcon();
        // await page.waitForTimeout(5000);
    } catch (error) {
        console.error("Error while login :", error);
    }
});

test('Verify that user is able to login with blank email', async ({ page }) => {
    try {
        const loginPage = new Login(page);

        await loginPage.viewEmailField();
        await loginPage.clickEmailField();
        await loginPage.clickPasswordField();
        await loginPage.viewEmailValidation();
    } catch (error) {
        console.error("Error while blank email is passeed:", error);
    }
});

test('Verify that user is able to login with blank password', async ({ page }) => {
    try {
        const loginPage = new Login(page);

        await loginPage.viewPasswordField();
        await loginPage.clickPasswordField();
        await loginPage.clickEmailField();
        await loginPage.viewPasswordValidation();
    } catch (error) {
        console.error("Error while blank password is passed:", error);
    }
});

test('Verify that user is unable to login with incorrect test data', async ({ page }) => {
    try {
        const loginPage = new Login(page);

        await loginPage.viewLogo();
        await loginPage.viewloginText();
        await loginPage.viewEmailField();
        await loginPage.enterEmailField(loginData.email1);
        await loginPage.viewPasswordField();
        await loginPage.enterPasswordField(loginData.password2);
        await loginPage.viewPasswordIcon();
        await loginPage.clickPasswordIcon();
        // await page.waitForTimeout(5000);
        await loginPage.clickLogInButton();

        const errorMessage = page.getByText('Your email and/or password are incorrect');
        await expect(errorMessage).toBeVisible();
    } catch (error) {
        console.error("Error while invalid login :", error);
    }
});
