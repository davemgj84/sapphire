INSERT INTO users
  (username, email)
VALUES
  ('monkey_King', 'vryCOOL@aol.com');

INSERT INTO scenes
  (title, initial_dialogue)
VALUES
  ('Old Man', 1),
  ('Alchemist', 4),
  ('Hunter', 7),
  ('Snail', 10),
  ('Sapphire Monkey', 13);

-- DIALOGUES

-- scene 1
INSERT INTO dialogues
  (scene_id, story)
VALUES
  (1, 'scene 1, dialogue 1 Nunc tristique sapien sagittis, consequat enim vel, mattis ex. Suspendisse lacus nunc, tempus eget sapien id, interdum sollicitudin leo. Integer rhoncus mauris eget luctus congue. Vivamus lectus eros, ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac .'),
  (1, 'scene 1, dialogue 2 Suspendisse lacus nunc, tempus eget sapien id, interdum sollicitudin leo. Integer rhoncus mauris eget luctus congue. Vivamus lectus eros, ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),
  (1, 'scene 1, dialogue 3 rhoncus mauris eget luctus congue. Vivamus lectus eros, ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),

  -- scene 2

  (2, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),
  (2, 'Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),
  (2, 'Ut ac imperdiet elit, nec viverra velit.'),

  -- scene 3

  (3, 'Suspendisse lacus nunc, tempus eget sapien id, interdum sollicitudin leo. Integer rhoncus mauris eget luctus congue. Vivamus lectus eros, ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),
  (3, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'), 
  (3, 'Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),

  -- scene 4

  (4, 'ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),
  (4, ' torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),
  (4, 'Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),

    -- scene 5

  (5, 'consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),
  (5, 'per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.'),
  (5, 'Ut ac imperdiet elit, nec viverra velit.');

-- one badge per scene

INSERT INTO badges
  (scene_id, user_id, title, description, image)
VALUES
  (1, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg'),
  (2, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg'),
  (3, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg'),
  (4, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg'),
  (5, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg');

-- choices 

INSERT INTO choices 
  (dialogue_id, label, next_dialogue_id, weight, summary)
VALUES 
  (1, 'yes', 2, 10, 'You chose yes'), 
  (1, 'no', 3, 20, 'You chose no');

-- adventures 

-- INSERT INTO adventures
--   (user_id, scene1, scene2, scene3, scene4, scene5)
-- VALUES
--   (1, 'ONE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'TWO Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet. ', 'THREE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'FOUR Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'FIVE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet. ' );
