import axios, { AxiosInstance } from "axios";
import Token from "./Token";

const config = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Expose-Headers": "Access-Control-",
  "Access-Control-Allow-Headers":
    "Access-Control-, Origin, X-Requested-With, Content-Type, Accept",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD",
  "Access-Control-Allow-Origin": "*",
  Allow: "GET, POST, PUT, DELETE, OPTIONS, HEAD",
};

const GenericAPI: AxiosInstance = axios.create({
  timeout: 60000,
  headers: config,
});

const DailyRoutineAPI: AxiosInstance = axios.create({
  baseURL: `http://192.168.1.11:3001`,
  timeout: 60000,
  headers: config,
});

export { DailyRoutineAPI, GenericAPI };
