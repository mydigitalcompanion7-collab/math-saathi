CREATE TABLE IF NOT EXISTS usage_daily (
  user_sub TEXT NOT NULL,
  day TEXT NOT NULL,
  seconds INTEGER NOT NULL DEFAULT 0 CHECK (seconds >= 0),
  updated_at TEXT NOT NULL,
  PRIMARY KEY (user_sub, day)
);
CREATE INDEX IF NOT EXISTS usage_daily_day_idx ON usage_daily(day);
