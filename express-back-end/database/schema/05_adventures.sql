DROP TABLE IF EXISTS adventures CASCADE;

CREATE TABLE adventures (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  scene1 TEXT,
  scene2 TEXT,
  scene3 TEXT,
  scene4 TEXT,
  scene5 TEXT
);