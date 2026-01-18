const {test, expect}=require('@playwright/test')

test("Auto suggest dropdowns", async ({page})=>{

    await page.goto('https://www.redbus.in/');

    // Locate the select element 
    await page.locator('#srcinput').click





    await page.waitForTimeout(5000);

})