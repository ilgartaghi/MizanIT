const {test, expect} = require('@playwright/test');

test('Handle Checkboxes', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Single checkbox
    await page.locator("//input[@id='monday']").check();
    //await page.check("//input[@id='monday']");
    
    expect(await page.locator("//input[@id='monday']")).toBeChecked();
    expect(await page.locator("//input[@id='monday']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@id='sunday']").isChecked()).toBeFalsy();

    //Multiple checkboxes
    const checkboxesLocators=[
        "//input[@id='monday']",
        "//input[@id='sunday']",
        "//input[@id='saturday']"
    ];

    for(const locator of checkboxesLocators)
    {
        await page.locator(locator).check();

    }

    await page.waitForTimeout(5000); //pausing code

    for(const locator of checkboxesLocators)
    {
        if(await page.locator(locator).isChecked())
        {
        await page.locator(locator).uncheck();
        }

    }

    await page.waitForTimeout(5000); //pausing code

})