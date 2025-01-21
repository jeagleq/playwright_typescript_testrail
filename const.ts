import path from "path";
import fs from "fs";

export const login_file = path.resolve(__dirname, "./", "loginAuth.json");
export let myCookie: Cookie;
export interface Cookie {
  cookies: CookiesEntity[];
}

export interface CookiesEntity {
  name: string;
  value: string;
  domain?: string;
  path?: string;
  expires?: number;
  httpsOnly?: boolean;
  secure?: boolean;
  samSite?: string;
}

if (fs.existsSync(login_file)) {
  myCookie = JSON.parse(fs.readFileSync(login_file, "utf-8"));
} else {
  console.log(`The file ${login_file} does not exist.`);
}
