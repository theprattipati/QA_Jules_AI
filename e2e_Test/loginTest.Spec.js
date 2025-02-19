import {login } from '../pageObjects/login.js'
import { test, expect } from '@playwright/test'
import { beforeEach } from 'node:test';

beforeEach(async ()=>{
  
    await page.goto('https://demo.haroldwaste.com/')

})
test('login', async({page}) =>{

const loginPage=new login();

await loginPage.viewLogo();


}

)