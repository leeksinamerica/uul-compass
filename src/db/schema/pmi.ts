import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  date,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";
import { pmiStatusEnum, taskStatusEnum, taskPriorityEnum } from "./enums";
import { users, departments } from "./org";

// ─── PMI Workstreams ────────────────────────────────────────────
export const pmiWorkstreams = pgTable("pmi_workstreams", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  departmentId: uuid("department_id").references(() => departments.id),
  ownerId: uuid("owner_id").references(() => users.id),
  color: varchar({ length: 20 }),
  sortOrder: integer("sort_order").default(0),
  status: pmiStatusEnum().default("not_started").notNull(),
  startDate: date("start_date"),
  endDate: date("end_date"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── PMI Milestones ─────────────────────────────────────────────
export const pmiMilestones = pgTable("pmi_milestones", {
  id: uuid().defaultRandom().primaryKey(),
  workstreamId: uuid("workstream_id")
    .references(() => pmiWorkstreams.id)
    .notNull(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  targetDate: date("target_date"),
  completedDate: date("completed_date"),
  status: pmiStatusEnum().default("not_started").notNull(),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── PMI Tasks ──────────────────────────────────────────────────
export const pmiTasks = pgTable("pmi_tasks", {
  id: uuid().defaultRandom().primaryKey(),
  workstreamId: uuid("workstream_id")
    .references(() => pmiWorkstreams.id)
    .notNull(),
  milestoneId: uuid("milestone_id").references(() => pmiMilestones.id),
  title: varchar({ length: 500 }).notNull(),
  description: text(),
  assigneeId: uuid("assignee_id").references(() => users.id),
  reporterId: uuid("reporter_id").references(() => users.id),
  status: taskStatusEnum().default("todo").notNull(),
  priority: taskPriorityEnum().default("medium").notNull(),
  dueDate: date("due_date"),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  tags: text().array(),
  sortOrder: integer("sort_order").default(0),
  metadata: jsonb(), // SOP references, tribal knowledge notes, etc.
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
