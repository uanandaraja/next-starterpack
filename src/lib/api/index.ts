import { Hono } from "hono";
import { health } from "./health";
import { users } from "./users";

export const api = new Hono();

api.route("/health", health);
api.route("/users", users);
