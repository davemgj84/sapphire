DROP TABLE IF EXISTS badges CASCADE;

CREATE TABLE badges (
  id SERIAL PRIMARY KEY NOT NULL,
  scene_id INTEGER REFERENCES scenes(id),
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255), 
  description TEXT,
  image VARCHAR(255) 
);