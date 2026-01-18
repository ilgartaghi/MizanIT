const {test,expect} = require('@playwright/test');

test('AssertionsTest', async({page})=>{

    //open app url
    await page.goto('https://demo.nopcommerce.com/register');

    //1. expect expect(page).toHaveURL Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //2. expect(page).toHaveTitle Page has title 
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //3. expect(locator).toBeVisible()		Element is visible
    const logoElement = page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //4. expect(locator).toBeEnabled()		Control is enabled
    //   expect(locator).toBeDisabled()		Element is disabled
    const searchStoreBox = await page.locator('#small-search-box-form');
    await expect(searchStoreBox).toBeEnabled();

    //5. expect(locator).toBeChecked()		Radio/Checkbox is checked
    await page.click('#gender-male');
    const radioButton = await page.locator('#gender-male');
    await expect(radioButton).toBeChecked();

    const checkBox = await page.locator('id=NewsLetterSubscriptions_0__IsActive');
    await expect(checkBox).toBeChecked();

    //6. expect(locator).toHaveAttribute()	Element has attribute
    const regButton = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('name','register-button');
    await expect(regButton).toHaveAttribute('type','submit');

    //7. expect(locator).toHaveText()			Element matches text
    const titleText = await page.locator('.page-title h1');
    await expect(titleText).toHaveText('Register'); //full text

    //8. expect(locator).toContainText()		Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg'); //partial text
    //or
    await expect(titleText).toContainText('Regi'); //partial text

    //9. expect(locator).toHaveValue(value)	Input has a value
    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');

    //10. expect(locator).toHaveCount()	//expect(locator).not.toHaveCount()	List of elements has/has not given length
    const oprions = await page.locator('select[name="DateOfBirthMonth"] option');
    await expect(options).toHaveCount(13);
    await expect(options).not.toHaveCount(14);
    await expect(options).not.toHaveCount(12);

	

})