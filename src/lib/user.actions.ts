"use server";

import { db } from "@/db";
import { users, usersInsert } from "@/db/schema";

export async function createUser(user: usersInsert) {
  try {
    await db.insert(users).values(user);
    return { success: true };
  } catch (error) {
    return { error };
  }
}
