INSERT INTO users
  (username, email)
VALUES
  ('monkey_King', 'vryCOOL@aol.com');

INSERT INTO scenes
  (user_id, title)
VALUES
  (1, 'Old Man');
INSERT INTO scenes
  (user_id, title)
VALUES
  (1, 'Alchemist');
INSERT INTO scenes
  (user_id, title)
VALUES
  (1, 'Hunter');
INSERT INTO scenes
  (user_id, title)
VALUES
  (1, 'Snail');
INSERT INTO scenes
  (user_id, title)
VALUES
  (1, 'Sapphire Monkey');

-- DIALOGUES

-- scene 1
INSERT INTO dialogues
  (scene_id, story)
VALUES
  (1, 'scene 1, dialogue 1 Nunc tristique sapien sagittis, consequat enim vel, mattis ex. Suspendisse lacus nunc, tempus eget sapien id, interdum sollicitudin leo. Integer rhoncus mauris eget luctus congue. Vivamus lectus eros, ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac .');
INSERT INTO dialogues
  (scene_id, story)
VALUES
  (1, 'scene 1, dialogue 2 Suspendisse lacus nunc, tempus eget sapien id, interdum sollicitudin leo. Integer rhoncus mauris eget luctus congue. Vivamus lectus eros, ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');

INSERT INTO dialogues
  (scene_id, story)
VALUES
  (1, 'scene 1, dialogue 3 rhoncus mauris eget luctus congue. Vivamus lectus eros, ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');

  -- scene 2

INSERT INTO dialogues
  (scene_id, story)
VALUES
  (2, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');

INSERT INTO dialogues
  (scene_id, story)
VALUES
  (2, 'Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');

INSERT INTO dialogues
  (scene_id, story)
VALUES
  (2, 'Ut ac imperdiet elit, nec viverra velit.');

  -- scene 3

INSERT INTO dialogues
  (scene_id, story)
VALUES
  (3, 'Suspendisse lacus nunc, tempus eget sapien id, interdum sollicitudin leo. Integer rhoncus mauris eget luctus congue. Vivamus lectus eros, ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');

INSERT INTO dialogues
  (scene_id, story)
VALUES
  (3, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');
  
INSERT INTO dialogues
  (scene_id, story)
VALUES
  (3, 'Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');

  -- scene 4

INSERT INTO dialogues
  (scene_id, story)
VALUES
  (4, 'ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');

INSERT INTO dialogues
  (scene_id, story)
VALUES
  (4, ' torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');
  
INSERT INTO dialogues
  (scene_id, story)
VALUES
  (4, 'Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');

    -- scene 5

INSERT INTO dialogues
  (scene_id, story)
VALUES
  (5, 'consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');

INSERT INTO dialogues
  (scene_id, story)
VALUES
  (5, 'per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.');
  
INSERT INTO dialogues
  (scene_id, story)
VALUES
  (5, 'Ut ac imperdiet elit, nec viverra velit.');

-- one badge per scene

INSERT INTO badges
  (scene_id, user_id, title, description, image)
VALUES
  (1, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg');

INSERT INTO badges
  (scene_id, user_id, title, description, image)
VALUES
  (2, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg');

INSERT INTO badges
  (scene_id, user_id, title, description, image)
VALUES
  (3, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg');

INSERT INTO badges
  (scene_id, user_id, title, description, image)
VALUES
  (4, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg');

INSERT INTO badges
  (scene_id, user_id, title, description, image)
VALUES
  (5, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg');

-- choices 

INSERT INTO choices 
  (dialogue_id, label, next_dialogue_id, weight, summary)
VALUES 
  (1, 'yes', 2, 10, 'You chose yes');

INSERT INTO choices 
  (dialogue_id, label, next_dialogue_id, weight, summary)
VALUES 
  (1, 'no', 3, 20, 'You chose no');

-- adventures 

-- INSERT INTO adventures
--   (user_id, scene1, scene2, scene3, scene4, scene5)
-- VALUES
--   (1, 'ONE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'TWO Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet. ', 'THREE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'FOUR Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'FIVE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet. ' );
