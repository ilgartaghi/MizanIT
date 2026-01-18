// const {test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test('Locators', async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");
    
    // await page.locator('id=login2').click();                                                 //click on login button - property
    await page.click('id=login2');

    //await page.fill('#loginusername');                                                        //provide username - CSS
    await page.fill('#loginusername','pavanol');

    await page.type("input[id='loginpassword']",'test@123');                                    //provide password - css

    await page.click("//button[normalize-space()='Log in']");                                   //Click on Login button

   const logoutlink = page.locator("//a[@id='logout2']")                                                                                 //verify logout presens  

    expect(logoutlink).toBeVisible;

    await page.close();


})