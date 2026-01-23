import { test, expect } from '@playwright/test';

let page;

////////////////////////////////////////////////////////////////////////////////////////

test.beforeAll(async ({browser})=>{

    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/index.html');

    //Login 
    await page.locator('#login2').click();

    await page.locator('#loginusername').fill('panavol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();

});

/////////////////////////////////////////////////////////////////////////////////////////

test.afterAll(async()=>{

    await page.locator('#logout2').click();

});

//////////////////////////////////////////////////////////////////////////////////////////

test('Home Page Test', async () => {


    //Home Page
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
   


    //await page.waitForTimeout(5000);

});

////////////////////////////////////////////////////////////////////////////////////////////

test('Add Product to cart Test', async () => {

    //Add product to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('.btn.btn-success.btn-lg').click()
 
    //handle alert
    page.on('dialog', async dialog=>{
    expect(dialog.message()).toContain('Product added. ')
    await dialog.accept();
    })

});