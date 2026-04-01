import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";
import { users } from "./org";

// ─── Integration Logs ───────────────────────────────────────────
export const integrationLogs = pgTable("integration_logs", {
  id: uuid().defaultRandom().primaryKey(),
  integration: varchar({ length: 50 }).notNull(), // pallet, dts, carrier_api, gdrive
  direction: varchar({ length: 10 }).notNull(), // inbound, outbound
  method: varchar({ length: 10 }).notNull(), // api, webhook, manual
  endpoint: text(),
  requestPayload: jsonb("request_payload"),
  responsePayload: jsonb("response_payload"),
  status: varchar({ length: 20 }).notNull(), // success, error, pending
  errorMessage: text("error_message"),
  targetType: varchar("target_type", { length: 50 }),
  targetId: uuid("target_id"),
  durationMs: integer("duration_ms"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ─── Audit Log (Append-Only) ────────────────────────────────────
export const auditLog = pgTable("audit_log", {
  id: uuid().defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id),
  action: varchar({ length: 50 }).notNull(),
  tableName: varchar("table_name", { length: 100 }),
  recordId: uuid("record_id"),
  oldValues: jsonb("old_values"),
  newValues: jsonb("new_values"),
  ipAddress: varchar("ip_address", { length: 45 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
