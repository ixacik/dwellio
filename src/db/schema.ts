import { relations } from "drizzle-orm";
import {
  doublePrecision,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// users
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkId: varchar("clerk_id", { length: 32 }).notNull(),
  email: varchar("email", { length: 64 }).notNull(),
  name: varchar("name", { length: 64 }).notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  listings: many(listings),
  comments: many(comments),
  bookmarks: many(bookmarks),
}));

export type usersInsert = typeof users.$inferInsert;
export type users = typeof users.$inferSelect;

// listings
export const listings = pgTable("listings", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 64 }).notNull(),
  description: text("description"),
  price: doublePrecision("price").notNull(),
  rooms: integer("rooms").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
  // relations
  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id),
});

export const listingsRelations = relations(listings, ({ many }) => ({
  comments: many(comments),
  bookmarks: many(bookmarks),
}));

export type listingsInsert = typeof listings.$inferInsert;
export type listings = typeof listings.$inferSelect;

// comments
export const comments = pgTable("comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  content: text("content").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
  // relations
  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id),
  listingId: uuid("listing_id")
    .notNull()
    .references(() => listings.id),
});

export const commentsRelations = relations(comments, ({ one }) => ({
  listing: one(listings, {
    fields: [comments.listingId],
    references: [listings.id],
  }),
  user: one(users, {
    fields: [comments.authorId],
    references: [users.id],
  }),
}));

export type commentsInsert = typeof comments.$inferInsert;
export type comments = typeof comments.$inferSelect;

// users to listings / bookmarks
export const bookmarks = pgTable("bookmarks", {
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  listingId: uuid("listing_id")
    .notNull()
    .references(() => listings.id),
});

export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
  user: one(users, {
    fields: [bookmarks.userId],
    references: [users.id],
  }),
  listing: one(listings, {
    fields: [bookmarks.listingId],
    references: [listings.id],
  }),
}));
