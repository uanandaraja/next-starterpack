import { Hono } from "hono";
import { health } from "./health";

export const api = new Hono();

api.route("/", health);
