import { MainPage } from "@/pages/mainPage";
// import {
//   BatchInfo,
//   Configuration,
//   Eyes,
//   EyesRunner,
//   Target,
//   VisualGridRunner,
// } from "@applitools/eyes-playwright";
import { Dialog, expect, Page, test } from "@playwright/test";

test.describe.configure({ mode: "serial" });
let page: Page;

// let eyes: Eyes;

// export let Batch: BatchInfo;
// export let Config: Configuration;
// export let Runner: EyesRunner;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  const mainPage = new MainPage(page);
  // Runner = new VisualGridRunner({ testConcurrency: 1 });
  // Batch = new BatchInfo({ name: `Demoblaze home page` });

  // Config = new Configuration();
  // Config.setBatch(Batch);
  // Config.setApiKey(config.appliApiKey);

  // eyes = new Eyes(Runner, Config);

  await mainPage.goto();
  await mainPage.cart.click();
  while (await mainPage.totalPrice.isVisible()) {
    await mainPage.deleteBtn.click();
  }
  await mainPage.home.click();
});

test.describe("Home Page", () => {
  test.beforeEach(async () => {
    const mainPage = new MainPage(page);
    // Start Applitools Visual AI Test
    // Args: Playwright Page, App Name, Test Name, Viewport Size for local driver
    //await eyes.open(page, "Home Page", test.info().title);
  });
  test("Items on the first page@reg@sanity", async () => {
    const mainPage = new MainPage(page);

    await page.waitForSelector(mainPage.first_product_selector);
    expect(await mainPage.products.count()).toEqual(9);

    //await eyes.check("First page", Target.window().fully());
  });
  test("Items on the second page@reg@sanity", async () => {
    const mainPage = new MainPage(page);
    await expect(mainPage.nextBtn).toBeVisible();
    await mainPage.nextBtn.click();
    await page.waitForTimeout(2000);

    await expect(await mainPage.products.count()).toEqual(6);
    await page.waitForTimeout(2000);
    //await eyes.check("Second page", Target.window().fully());
  });
  test("Add to the cart@reg", async () => {
    const mainPage = new MainPage(page);
    await mainPage.monitorApple.click();
    await mainPage.addToCart.click();
    page.on("dialog", async (dialog: Dialog) => {
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
    });
    //await eyes.check("Product page", Target.window().fully());
  });

  test("Delete from the cart@reg", async () => {
    const mainPage = new MainPage(page);
    await mainPage.cart.click();
    await page.waitForTimeout(2000);

    //await eyes.check("Cart", Target.window().fully());

    await expect(mainPage.totalPrice).toHaveText("400");
    await mainPage.deleteBtn.click();
    await expect(mainPage.totalPrice).toBeHidden();
    //await eyes.check("Cart", Target.window().fully());
    //await page.close();
  });
  test.afterEach(async () => {
    const mainPage = new MainPage(page);
    // End Applitools Visual AI Test
    //await eyes.close();
  });
});
// test.afterAll(async () => {
//   // Wait for Ultrast Grid Renders to finish and gather results
//   const results = await Runner.getAllTestResults();
//   console.log("Visual test results", results);
// });
