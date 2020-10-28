DROP TABLE IF EXISTS dialogues CASCADE;

CREATE TABLE dialogues (
  id SERIAL PRIMARY KEY NOT NULL,
  scene_id INTEGER REFERENCES scenes(id),
  story TEXT
);

