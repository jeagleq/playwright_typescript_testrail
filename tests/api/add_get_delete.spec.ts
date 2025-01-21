import { config } from "@/config";
import { myCookie } from "@/const";
import { expect, test } from "@playwright/test";
const crypto = require("crypto");
test.describe.configure({ mode: "serial" });

test.describe("Add and delete", () => {
  const id_of_the_item = crypto.randomUUID();
  test("Add to the cart", async ({ request }) => {
    const response = await request.post(config.baseUrlApi, {
      data: {
        cookie: `${myCookie.cookies[1].value}`,
        flag: true,
        prod_id: 10,
        id: id_of_the_item,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    expect(response.status()).toBe(200);
  });
  test("Get the cart", async ({ request }) => {
    const response = await request.post(config.baseUrlApi, {
      data: {
        cookie: `${myCookie.cookies[1].value}`,
        flag: true,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respData = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(respData.Items[0].cookie).toEqual(expect.any(String));
    expect(respData.Items[0].id).toEqual(expect.any(String));
    expect(respData.Items[0].prod_id).toEqual(expect.any(Number));

    expect(respData).toHaveProperty("Items[0].cookie", "jimmy_neutron");
    expect(respData).toHaveProperty("Items[0].id", id_of_the_item);
  });
  test("Delete from the cart", async ({ request }) => {
    const response = await request.post(config.baseUrlApi, {
      data: {
        id: id_of_the_item,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    expect(response.status()).toBe(200);
  });
});
