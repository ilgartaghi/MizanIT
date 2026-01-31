const { test, expect } = require("@playwright/test");

test("Get users", async ({ request }) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/users");
  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data.length);
  console.log(await response.json());
});

