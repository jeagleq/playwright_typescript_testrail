import { Page } from "@playwright/test";
import { config } from "@/config";

export class LoginPage {
  readonly loginLink = this.page.getByRole("link", { name: "Log in" });
  readonly loginBtn = this.page.getByRole("button", { name: "Log in" });
  readonly username = this.page.locator("#loginusername");
  readonly password = this.page.locator("#loginpassword");
  readonly logoutBtn = this.page.getByRole("link", { name: "Log out" });

  async goto() {
    await this.page.goto(config.baseUrl);
  }

  async login(username: string, password: string) {
    await this.goto();
    await this.loginLink.click();
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async logout() {
    await this.goto();
    await this.logoutBtn.click();
  }

  constructor(private readonly page: Page) {}
}
