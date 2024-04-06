"use server";

import { db } from "@/db";
import { users, usersInsert } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function createUser(user: usersInsert) {
  try {
    await db.insert(users).values(user);
    return { success: true };
  } catch (error) {
    return { error };
  }
}

export async function updateUser(user: usersInsert) {
  try {
    await db.update(users).set(user).where(eq(users.clerkId, user.clerkId)); // ! this is not a primary key - slow
    return { success: true };
  } catch (error) {
    return { error };
  }
}

export async function deleteUser({
  clerkId,
  id,
}: {
  clerkId?: string;
  id?: string;
}) {
  try {
    if (id) await db.delete(users).where(eq(users.id, id));
    else if (clerkId) await db.delete(users).where(eq(users.clerkId, clerkId));
    else return { error: "No ID or clerkId provided" };
  } catch (error) {
    return { error };
  }
}
