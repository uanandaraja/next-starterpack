import { Hono } from "hono";
import { auth } from "../../auth";
import { db } from "../../db";
import { user } from "../../db/schema";
import { eq } from "drizzle-orm";

export const users = new Hono();

users.get("/me", async (c) => {
  try {
    const session = await auth.api.getSession({
      headers: c.req.raw.headers,
    });

    if (!session) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const currentUser = await db
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified,
        image: user.image,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })
      .from(user)
      .where(eq(user.id, session.user.id))
      .limit(1);

    if (!currentUser.length) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json({ user: currentUser[0] });
  } catch (error) {
    return c.json({ error: "Internal server error" }, 500);
  }
});

