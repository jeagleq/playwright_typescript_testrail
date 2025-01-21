import { expect, Page } from "@playwright/test";
import { LoginPage } from "@/pages/loginPage";

const tempUserAuthFile = "./auth/tempUserAuth.json";

export async function createTempUserAuth(
  page: Page,
  username: string,
  password: string
) {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
  await expect(loginPage.logoutBtn).toBeVisible();

  await page.context().storageState({ path: tempUserAuthFile });
  return tempUserAuthFile;
}
