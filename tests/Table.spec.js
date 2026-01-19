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
/*
    const machedRow = await rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })

    await machedRow.locator('input').check();
*/

    //3. Select multiple products by using reusable function
/*
    await selectProduct(rows,page,'Smartphone');
    await selectProduct(rows,page,'Laptop');
    await selectProduct(rows,page,'Wireless Earbuds');
    await selectProduct(rows,page,'Gaming Console');
*/

    //4. print all product details using loop

    for(let i=0; i<await rows.count();i++)
    
    {
        const row = rows.nth(i);
        const tds = row.locator('td')

        for(let j=0;j<await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent());
        }

    }

    await page.waitForTimeout(5000);
})



async function selectProduct(rows, page, name)
{

    const machedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await machedRow.locator('input').check();


}