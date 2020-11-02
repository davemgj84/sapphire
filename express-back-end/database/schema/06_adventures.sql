DROP TABLE IF EXISTS adventures CASCADE;
DROP TABLE IF EXISTS adventure_choices CASCADE;

CREATE TABLE adventures (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE adventure_choices (
  id SERIAL PRIMARY KEY NOT NULL,
  adventure_id INTEGER REFERENCES adventures(id),
  choice_id INTEGER REFERENCES choices(id)
);