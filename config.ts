import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  baseUrl: `https://${process.env.ENV_NAME}.com/` || "test",
  baseUrlApi: `https://api.${process.env.ENV_NAME}.com/` || "test",
  username: process.env.USER_NAME || "test",
  password: process.env.PASSWORD || "test",
  appliApiKey: process.env.APPLITOOLS_API_KEY || "test",
};
