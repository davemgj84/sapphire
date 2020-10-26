INSERT INTO users (username, email)
VALUES ('monkey_King', 'vryCOOL@aol.com');

INSERT INTO scenes (user_id, title)
VALUES (1, 'Old Man');
INSERT INTO scenes (user_id, title)
VALUES (1, 'Alchemist');
INSERT INTO scenes (user_id, title)
VALUES (1, 'Hunter');
INSERT INTO scenes (user_id, title)
VALUES (1, 'Snail');
INSERT INTO scenes (user_id, title)
VALUES (1, 'Sapphire Monkey');


INSERT INTO dialogues (scene_id, story, choice)
VALUES (1, 'Nunc tristique sapien sagittis, consequat enim vel, mattis ex. Suspendisse lacus nunc, tempus eget sapien id, interdum sollicitudin leo. Integer rhoncus mauris eget luctus congue. Vivamus lectus eros, ullamcorper et justo quis, consequat mollis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed quam lectus. Ut ac imperdiet elit, nec viverra velit.', NULL);

INSERT INTO badges (scene_id, user_id, title, description, image)
VALUES (1, 1, 'BIGMAC', 'a great badge in honor of Andy', 'https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Big-Mac.jpg');

INSERT INTO adventures (user_id, scene1, scene2, scene3, scene4, scene5)
VALUES (1, 'ONE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'TWO Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet. ', 'THREE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'FOUR Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'FIVE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet. ' );
