DROP TABLE IF EXISTS scenes CASCADE;

CREATE TABLE scenes (
  id SERIAL PRIMARY KEY NOT NULL,
  -- user_id INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
<<<<<<< HEAD
=======
  -- initial_dialogue INTEGER REFERENCES dialogues(id)
>>>>>>> 5b4274af00c273d394032b831eafabb7b91d01bf
  initial_dialogue INTEGER
);