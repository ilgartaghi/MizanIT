const {test, expect}=require('@playwright/test')

test("Handle dropdowns",async ({page})=>{

    await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-18/?_gl=1*uwg0zy*_ga*NjI4MjY0MTIwLjE3Njc4NDg1Nzk.*_ga_SEKJ4E9T4H*czE3Njc5MjY1MzYkbzIkZzEkdDE3Njc5MjY1OTIkajQkbDAkaDAkZGhuc3oxeTlPei1md3RKTFlBYzRDNTQzRldmR1VvMEJ0Z1E.');

    // Locate the select element 
    await page.locator('.btn').click
    



    await page.waitForTimeout(6000);


})