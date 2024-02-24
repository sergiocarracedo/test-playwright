import { test, expect } from '@playwright/test';


test('should return tada', async ({ request }) => {
  const newIssue = await request.get(`http://localhost:3000/`, {});
  expect(newIssue.ok()).toBeTruthy();

  expect(await newIssue.json()).toEqual(expect.objectContaining({
    message: '⚡️ Tadaa!'
  }))
});

test('should multiply', async ({ request }) => {
  const newIssue = await request.post(`http://localhost:3000/multiply`, {
    data: {
      number: 7
    }
  });

  expect(newIssue.ok()).toBeTruthy();
  expect(await newIssue.text()).toEqual("49")
});
