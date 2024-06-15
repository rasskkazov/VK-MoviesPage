import axios from "axios";

import { API_TOKEN } from "./token";

export const axiosInstanceKinop = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": API_TOKEN,
  },
});
