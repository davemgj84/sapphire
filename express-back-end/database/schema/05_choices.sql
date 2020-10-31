DROP TABLE IF EXISTS choices CASCADE;

CREATE TABLE choices (
  id SERIAL PRIMARY KEY NOT NULL,
  dialogue_id INTEGER REFERENCES dialogues(id),
  label TEXT,
  next_dialogue_id INTEGER REFERENCES dialogues(id),
  badge_id INTEGER REFERENCES badges(id), 
  summary TEXT
);
