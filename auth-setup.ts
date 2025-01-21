import { test as setup } from "@playwright/test";
import { config } from "@/config";
import { LoginPage } from "@/pages/loginPage";

const authFile = "./loginAuth.json";

setup("Lgoin with valid creds", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(config.username, config.password);
  await page.waitForURL(config.baseUrl);
  await page.waitForTimeout(2000);
  await page.context().storageState({ path: authFile });
});
