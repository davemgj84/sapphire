INSERT INTO users
  (username, email)
VALUES
  ('monkey_King', 'vryCOOL@aol.com');

INSERT INTO scenes
  (title, initial_dialogue)
VALUES
  ('Old Man', 1),
  ('Alchemist', 6),
  ('Hunter', 12),
  ('Snail', 20),
  ('Sapphire Monkey', 28);

-- DIALOGUES

-- Scene 1
INSERT INTO dialogues
  (scene_id, story)
VALUES
  (1, 'scene 1, dialogue 1 You stepped outside to buy Doritos from the convenience store in the desolate town of  Zoomieville'),
  (1, 'scene 1, dialogue 2 Old man: I am old and I am a man and therefore I am wise. Listen to me, child!'),
  (1, 'scene 1, dialogue 3 You are must go on a quest to find the sapphire monkey or all of humanity will be doomed'),
  (1, 'scene 1, dialogue 4 This task is v. important, so pressure iz on like donkey kong'),
  (1, 'scene 1, dialogue 5 Old man: Ya hear me, or what!? (prompt yes or no)'),

  -- Scene 2

  (2, 'scene 2, dialogue 6 You follow directions given to you by the old man to find the Alchemist and find a small camp at the edge of the desert.'),
  (2, 'scene 2, dialogue 7 You find an man dressed in robes with strange symbols on it. This must be the alchemist. He waves you over and mentions that he recieved word of your approach.'),
  (2, 'scene 2, dialogue 8 Apparently part of the sapphire is lost in the desert and his mystical spookum powers can help guide you safely to it.'),
  --tween sceene for game 42
  (2, 'scene 2, dialogue 9 You done messed it up. You find yourself back at the Alchemist''s camp and he sighs dramatically. He''ll help you again tomorrow, but you''ll have to learn a new path through the desert.'),
  (2, 'scene 2, dialogue 10 You''ve completely failed in your task. This time, when you find yourself back at camp, the Alchemist''s home is baorded up with a note on the door that instructs you to find a Hunter in the plains. You shrug and wander off towards the horizon.'),
  (2, 'scene 2, dialogue 11 A small oasis is revealed in the heart of the shifting sands, and on a pedestal in the water glimmers a shining sapphire shard. Triumphantly, you return to the Alchemist who instructs you to seek out a friend of his that makes his living hunting in the plains aways away, and that he can lead you to the next shard.'),

  -- Scene3
  (3, 'scene 3, dialogue 12 - You have been walking for hours through the great plains looking for the hunter the alchemist told you about. You come across a small camp, but here is no one to be seen. You decide to look through the camp and see if there are any clues to where they may have gone.'),
  (3, 'scene 3, dialogue 13 - HUNTER: WHO ARE YOU! - as he points his bow at you with a arrow ready to fire.'),
  (3, 'scene 3, dialogue 14 - You respond explaining that the alchemist sent you and you are looking the a sapphire shard'),
  (3, 'scene 3, dialogue 15 HUNTER: OK.. I will help but only if you can answer this riddle.... This old one runs forever, but never moves at all. He has not lungs nor throat, but still a mighty roaring call. What is it?'),
  (3, 'scene 3, dialogue 16 HUNTER: Excellent! That is the correct answer. I will show you to the waterfall and you will find the shard there. From there you must travel to the enchanted forest and find the hermit near the great tree. They might know where the last shard remains..'),
  (3, 'scene 3, dialogue 17 HUNTER: That is wrong.... ill give you another chance tho... What is Bright as diamonds, loud as thunder, never still, a thing of wonder?'),
  (3, 'scene 3, dialogue 18 HUNTER: Excellent! That is the correct answer. I will show you to the waterfall and you will find the shard there. From there you must travel to the enchanted forest and find the hermit near the great tree. They might know where the last shard remains..'),
  (3, 'scene 3, dialogue 19 WRONG! The hunter scoffs... IT IS A WATERFALL! - HUNTER: find the waterfall and you will find the shard there. From there you must travel to the enchanted forest and find the hermit near the great tree. They might know where the last shard remains..'),

  --  Scene 4

  (4, 'scene 4, dialogue 20 - You travel to the enchanted forest in search of the wise hermit, looking for the Great Tree the Hunter told you about...'),
  (4, 'scene 4, dialogue 21 - You enter a small clearing and see the biggest tree you have ever seen in your entire life. It must be over 100 meters tall! Looking around, you dont see any place where there might be anyone, let alone a hermit.... suddenly you hear a faint squeaking sound and look down...'),
  (4, 'scene 4, dialogue 22 - Near your feet, there is a MEDIUM SIZED snail. Not that small, but not that big... and it is yelling at you!?'),
  (4, 'scene 4, dialogue 23 - SNAIL: HELP ME! I have been transformed into a snail and would love if you could find me some special herbs that can reverse the spell!? Will you help!? Please?!'),
  (4, 'scene 4, dialogue 24 - SNAIL: REALLY?! You wont help a snail out! I can not believe it! She "STORMS" off.... well slowly slides away... '),
  (4, 'scene 4, dialogue 25 - SNAIL: THANK YOU SO MUCH FOR HELPING ME!!!'),
  (4, 'scene 4, dialogue 26 - The snail eats the herbs you lay in front of her and she is magically transformed into her former self! She thanks you and asks if there is anything she can do for you on your journey?'),
  (4, 'scene 4, dialogue 27 - You are astonished at her transformation. After telling her that the Hunter sent you, and that you are looking for the last sapphire shard, she takes off her necklace and hands it to you... it carrys the shard in a pouch! She then tells you that where the ancient Sapphire Monkey relic resides - in the lost temple!'),

  -- Scene 5

  (5, 'scene 5, dialogue 28 Holy monkey bananagrams, you are inside of the sapphire monkey temple!'),
  (5, 'scene 5, dialogue 29 Is is a magical place -- smells a little funny. A small price to endure to save mother Earth and all of her children.'),
  (5, 'scene 5, dialogue 30 Now where in the name of Jimminy Cricket is that darn monkey? You search high and low to uncover this important shrine.'),
  (5, 'scene 5, dialogue 31 AHA! There! In the rubble. A glimmer of hope, the sapphire monkey has been located. Time to return the sapphire shards to their rightful destination...ohhhh noooooo. Is that a boulder rolling my way!? RUN!'),

  --boulder runaway scene
  (5, 'scene 5, dialogue 32 WOMP WOMP WOMP - smashed by a boulder. Was not on my list of potenital ways to die. GAME OVER'),
  (5, 'scene 5, dialogue 33 CLOSE CALL! Good thing I am a fast runner. Now, back to monkey business.'),
  (5, 'scene 5, dialogue 34 Very carefully, you reach to place those sapphire shards in the belly of the monkey king.'),
  (5, 'scene 5, dialogue 35 Oh, zut alors! That boulder chase made me forget everything. I never even found any sapphires. What am I doing here!? What is life!? Where are my Doritos!? '),
  (5, 'scene 5, dialogue 36 You will go down in the history books as a failure. SRY! BTW, have you met my friend, Rick?'),
  (5, 'scene 5, dialogue 37 With the shards you provided, the sapphire monkey king rises to life, terrifying, awe-inspriring, and omnipoetent. This monkey is our savior.'),
  (5, 'scene 5, dialogue 38 With a flick of the wrist, the sapphire monkey spreads restoration to the land'),
  (5, 'scene 5, dialogue 39 You are a hero of our time. The sapphire monkey crowns you with rubies. WOOHOO! Mission accomplished! Quest finished! THE END'),

  --adding buffer scene to scene 1
  (1, 'scene 1, dialogue 40 You follow the old man''s instructions and head off to find the Alchemist.'),
  (5, 'RunningGame'),--41
  (2, 'ShiftingSands');
--42


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
  (1, 'next', 2, 0, null),
  (2, 'next', 3, 0, null),
  (3, 'next', 4, 0, null),
  (4, 'next', 5, 0, 'You were tasked with a an important mission to find three sapphire shards and return them to the monkey. This will restore balance in the universe and save our planet.'),
  (5, 'no', 1, 20, 'You did not understand the mission at first and had listen to that old guy again.'),
  (5, 'yes', 40, 10, null),
  (40, 'map', null, 0, 'Let the adventure begin!'),
  (6, 'next', 7, 10, null),
  (7, 'next', 8, 10, null),

  (8, 'play game', 42, 10, null),
  (42, 'Fail to find the Shard', 9 , 10, null),
  (9, 'play game', 42, 10, null),
  (42, 'Lose the Shard forever', 10, 10, 'The shard was forever lost in the sand'),
  (10, 'Map', null, 10, null),
  (42, 'Find the Shard', 11, 10, 'You found the shard in the desert'),
  (11, 'Map', null, 10, null),

  (12, 'Next', 13, 0, null),
  (13, 'Next', 14, 0, null),
  (14, 'Next', 15, 0, null),
  (15, 'Correct', 16, 0, null),
  (16, 'To Map', null, 0, null),
  (15, 'Wrong', 17, 0, null),
  (17, 'Success', 18, 0, null),
  (18, 'To Map', null, 0, null),
  (17, 'Wrong', 19, 0, null),
  (19, 'To Map', null, 0, null),
  (20, 'Next', 21, 0, null),
  (21, 'Next', 22, 0, null),
  (22, 'Next', 23, 0, null),
  (23, 'NO', 24, 0, null),
  (24, 'Go to Map', null, 0, null),
  (23, 'YES', 25, 0, null),
  (25, 'Next', 26, 0, null),
  (26, 'Next', 27, 0, null),
  (27, 'Go to Map', null, 0, null),
  (28, 'next', 29, 0, 'You made it to the temple with no time to spare! You search diligently for the sapphire monkey'),
  (29, 'next', 30, 0, null),
  (30, 'next', 31, 0, 'A giant boulder seemingly emerges from the nethers and chases you down.'),
  (31, 'play game', 41, 10, 'You narrowly escape the boulder. Whew!'),
  (32, 'play again', null, 20, null),
  (33, 'next', 34, 0, 'Are the sapphrie shards nestled in your fanny pack, safe and sound?'),
  (34, 'no gems', 35, 20, 'Uh-oh! There are no sapphires to offer to the monkey.'),
  (34, 'yes gems', 37, 10, 'Yes! Behold, the sapphire shards!'),
  (35, 'next', 36, 0, null),
  (36, 'next', null, 0, 'An unsuccessful quest for the sapphires results in defeat and exhaustion. The world is a dumpster fire'),
  (37, 'next', 38, 0, null),
  (38, 'next', 39, 0, 'All of humanity rejoices as the sapphire shards bring the monkey to life and the land is restored for all flora, fauna, Pokemon, and snails. You are a hero!'),
  --added for boulder buffer
  (41, 'escape!', 33, 0 , 'You narrowly escape the boulder. Whew!'),
  (41, 'dead!', 32, 0 , 'DEATH BY BOULDER -- YIKES! Better luck next time.')

-- adventures 

-- INSERT INTO adventures
--   (user_id, scene1, scene2, scene3, scene4, scene5)
-- VALUES
--   (1, 'ONE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'TWO Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet. ', 'THREE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'FOUR Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'FIVE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet. ' );
