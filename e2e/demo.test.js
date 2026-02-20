import { expect, test } from '@playwright/test';

test('can add a new todo', async ({ page }) => {
  await page.goto('/');
  const input = page.locator('.add-input');
  await input.fill('Buy milk');
  await input.press('Enter');
  await expect(page.locator('text=Buy milk')).toBeVisible();
});

test('can mark todo as done', async ({ page }) => {
  await page.goto('/');
  const checkbox = page.locator('input[type="checkbox"]').first();
  await checkbox.check();
  const todo = page.locator('.todo').first();
  await expect(todo).toHaveClass(/done/);
});

test('can delete checked todos', async ({ page }) => {
  await page.goto('/');
  const checkbox = page.locator('input[type="checkbox"]').first();
  await checkbox.check();
  const deleteBtn = page.locator('button:has-text("delete checked")');
  await deleteBtn.click();
  await expect(page.locator('.todo')).toHaveCount(1);
});