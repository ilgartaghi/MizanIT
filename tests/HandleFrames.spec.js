const { test, expect } = require('@playwright/test');

test('frames', async ({ page }) => {
 
  await page.goto('https://ui.vision/demo/webtest/frames/');

    //Total frames
    const allframes = await page.frames();
    console.log("# of frames:", allframes.length);

    //1. using name or URL of the frame
    //const frame1 = await page.frame("name = mytext2")
/*
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("[name = 'mytext1']", 'Hello');
 */ 
    //2. using frame locator
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name = 'mytext1']");
    inputbox.fill("Hello")



  
  
  
  await page.waitForTimeout(5000);
 
});