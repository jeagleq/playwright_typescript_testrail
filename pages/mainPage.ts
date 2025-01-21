import { Page } from "@playwright/test";
import { config } from "@/config";

export class MainPage {
  readonly first_product_selector =
    "(//div[@class='col-lg-4 col-md-6 mb-4'])[1]";
  readonly products = this.page.locator(
    "(//div[@class='col-lg-4 col-md-6 mb-4'])"
  );
  readonly nextBtn = this.page.locator("#next2");
  readonly monitorApple = this.page.getByRole("link", {
    name: "Apple monitor",
  });
  readonly addToCart = this.page.getByRole("link", { name: "Add to cart" });
  readonly cart = this.page.getByRole("link", { name: "Cart", exact: true });
  readonly totalPrice = this.page.locator(".panel-title");
  readonly deleteBtn = this.page.getByRole("link", { name: "Delete" });
  readonly home = this.page.getByRole("link", {
    name: "Home (current)",
    exact: true,
  });

  async goto() {
    await this.page.goto(config.baseUrl);
  }
  constructor(private readonly page: Page) {}
}
