import { createTempUserAuth } from "@/datafactory/createAuth";

import { test, expect } from "@playwright/test";
import { config } from "@/config";
import { LoginPage } from "@/pages/loginPage";

test.describe("Logout Specs", () => {
  let tempUserAuth: string;
  test.beforeEach(async ({ page }) => {
    tempUserAuth = await createTempUserAuth(
      page,
      config.username,
      config.password
    );
  });

  test("Logout from web app - positive case", async ({ browser }) => {
    const UserContext = await browser.newContext({
      storageState: tempUserAuth,
    });
    const userPage = await UserContext.newPage();
    const loginPage = new LoginPage(userPage);

    await loginPage.logout();
    await expect(loginPage.loginLink).toBeVisible();
    await userPage.close();
  });
});
