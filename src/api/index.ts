import { get, post } from "./service";

export function getWeather() {
  return new Promise(async (resolve, reject) => {
    const result = await get("/getApi/weatherforecast");
    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export function apiRegister(data: any = {}) {
  return new Promise(async (resolve, reject) => {
    const result = await post("/api/Login/Register", {
      data,
    });
    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export function apiGetEmailCode(data: any) {
  return new Promise(async (resolve, reject) => {
    const result = await post("/api/SMS/SendEmail", data);
    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export function apiGetToken(data: any) {
  return new Promise(async (resolve, reject) => {
    const result = await post("​/api​/SMS​/SendEmail", data);
    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}
