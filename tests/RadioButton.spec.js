const {test, expect} = require('@playwright/test');

test('Handle Radio buttons', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

        await page.locator("//input[@id='male']").check(); //selects male radio button
        //await page.check("//input[@id='male']");
        await expect(page.locator("//input[@id='male']")).toBeChecked();
        await expect(page.locator("//input[@id='male']").isChecked()).toBeTruthy();

        //await page.locator("//input[@id='female']").check(); //selects female radio button
        //await page.check("//input[@id='male']");
        await expect(page.locator("//input[@id='female']")).not.toBeChecked();
        await expect(page.locator("//input[@id='female']").isChecked()).toBeFalsy();



    await page.waitForTimeout(5000); //pausing code
})