const {test, expect}=require('@playwright/test')

test("handling table",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // 1. total # of rows and columns
    const columns = await table.locator('thead tr th');
    console.log('# of columns:', await columns.count());

    const rows = await table.locator('tbody tr');
    console.log('Number of rows:', await rows.count());


    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    //2. Select checkbox for product 4

    await rows.filter({
        has: page.locator('td');
        hasText: 'Product 4'
    })





        await page.waitForTimeout(5000);
})