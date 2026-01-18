const {test, expect}=require('@playwright/test')

test("simple table",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');






        await page.waitForTimeout(5000);
})