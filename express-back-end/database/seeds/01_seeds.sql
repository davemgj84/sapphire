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
  (1, 'scene 1, dialogue 1 You step outside to buy Doritos from the convenience store in the desolate town of  Zoomieville. Things have become increasingly bleak as scientists have predicted the end of the world is near, so you''ve taken to tending to an ant farm in your basement to pass the time and keep your mind busy.'),
  (1, 'scene 1, dialogue 2 OLD MAN: "I am old and I am a man and therefore, I am wise. Listen to me, kid!" You are startled by his blunt approach, but you have no plans and decide it might be interesting to hear him out.'),
  (1, 'scene 1, dialogue 3 OLD MAN: "Our Earth is burning but it wasn''t always like this. Long before you were born, our land was lush and brimming with life. Last night, I had a vision that -- hidden deeply in a forest -- rests a temple in honour of the Sapphire Monkey. Vandals stole the sapphires, causing the great Sapphire Monkey to lose its power, resulting in a curse over our land."' ),
  (1, 'scene 1, dialogue 4  OLD MAN: "You must go on a quest to find three sapphire shards and return them to the monkey, or all of humanity will be doomed." Vapidly, you blink at the geezer but his gaze never falters. You want to doubt this man''s story. Afterall, you don''t believe in mystical visions, aliens or, the Lochness Monster. Then again, the world is ending and maybe, deep down, you DO want to believe. You are filled with the impulse for nonsensical adventure.'),
  (1, 'scene 1, dialogue 5 OLD MAN: "Ya hear me, or what!?"'),

  -- Scene 2

  (2, 'scene 2, dialogue 6 The old man has directed you to find his friend, the alchemist, at a small camp on the edge of the desert. Apparently part of the sapphire is lost in the desert and his mystical spookum powers can help guide you safely to it. You trudge slowly forward with the realization that, though stylish, Crocs are not ideal foot protection in the desert and your thoughts drift to how you should have bought some Gatorade with those Doritos.'),
  (2, 'scene 2, dialogue 7 On the brink of giving up, you are shocked to discover a person dressed in robes covered in strange symbols. It occurs to you that you don''t actually know what an alchemist is, but your intuition tells you this free spirit must be the one.'),
  (2, 'scene 2, dialogue 8 ALCHEMIST: "There''s a small shard of sapphire lost in the dessert sands. Each morning, the sands shift, making it increasinly diffucult to locate. I''ve become too slow to find it on my own. TAKE MY MAP! Follow the arrows to discover what you desire." [type the arrows that appear on the screen before time runs out!]'),
  --tween sceene for game 42
  (2, 'scene 2, dialogue 9 DAG NABBIT! You''ve done messed up. Those arrows were just as cryptic as you thought and you''ve got sand in your trousers, which is not ideal. You find yourself back at the Alchemist''s camp where he sighs disapprovingly. He''ll help you again tomorrow, but you''ll have to learn a new path through the desert.'),
  (2, 'scene 2, dialogue 10 You return from your day of aimlessly rolling around in the sand, doubt and defeat overcome you because you''ve completely failed in your task. As you search for the alchemist, you notice he''s gone. All he''s left behind is a McDonald''s bag. From the receipt, you discover that his name is actually Andy. Weird. You eat a cold fry left solemnly at the bottom of the bag and decide it''s high time to move on. You shrug and wander off towards the horizon.'),
  (2, 'scene 2, dialogue 11 GLORY BE! A small oasis is revealed in the heart of the shifting sands -- and -- on a pedestal in the water, glimmers a shining sapphire shard. Your cycnical mind doesn''t even contemplate this obvious wizardry. All the matters now is the Sapphire Monkey! Triumphantly, you return to the alchemist who instructs you to seek out a friend of his that makes their living hunting in the plains. He suspects they might have pertinent info on one of the sapphire shards.'),

  -- Scene3
  (3, 'scene 3, dialogue 12 - You walk for hours through the great plains, the prairie dogs and mosquitos your only companions. Seeing wildlife for the first time in many years gives you a sense of hope. But that hope is overshaddowed by the doom of sweeping vacancy. You wonder if you''ve gone the right direction when you stumble upon a small camp. Nobody is home and you are feeling rife with curiosity. You pick through the hunter''s belongings for clues.'),
  (3, 'scene 3, dialogue 13 - HUNTER: "WHO IN THE NAME OF TIM HORTON DO YOU THINK YOU ARE!?" -- she points her bow and arrow at you and while you are frightened, you are also mildly relieved it''s not a gun.'),
  (3, 'scene 3, dialogue 14 - You consider telling her that you think you are Tom Hanks -- but decide against it -- in favor of explaining to her that the alchemist sent you because you are on a quest to find and return sapphire shards the the legendary Sapphire Monkey. She lowers her bow.'),
  (3, 'scene 3, dialogue 15 HUNTER: "The alchemist? Isn''t he dreamy?" You aren''t sure if she means this literally or figuratively but nod your head yes regardless to garner her trust. HUNTER: "I will help only if you can answer this riddle... This old one runs forever, but never moves at all. He has not lungs nor throat, but still a mighty roaring call. What is it?'),
  (3, 'scene 3, dialogue 16 HUNTER: "HOT DOG! That is the correct answer. I will show you to the waterfall where you will find the shard burried under a gnome hut. From there you, must travel to the enchanted forest and find the hermit near the great tree. They might know where the last shard remains..."'),
  (3, 'scene 3, dialogue 17 HUNTER: "You''re not the sharpest knife in the drawer, are you? I''ll give you one more shot (pun intended) at this riddle... What is Bright as diamonds, loud as thunder, never still, a thing of wonder?"'),
  (3, 'scene 3, dialogue 18 HUNTER: "You took the slow train but you still arrived -- That is the correct answer! Follow me to the waterfall where you will find the shard burried under a gnome hut. From there you must travel to the enchanted forest and find the hermit near the GIANT tree. Like, really, really big. Please don''t miss it. The hermit might know where the last shard remains."'),
  (3, 'scene 3, dialogue 19 "WRONG!" The hunter scoffs... "IT''S A WATERFALL, Einstein! And here -- take my cat! She doesn''t make as good of a bird dog as I''d hoped" You are confused by this strange person and decide to seek shelter in a nearby forest to hide. Maybe you aren''t a master riddler, but this cat is an unexpected perk to losing out on that sapphire. You call it Little Princess Artoo.'),

  --  Scene 4

  (4, 'scene 4, dialogue 20 - You slink along to the enchanted forest in search of the wise hermit, but your thoughts keep drifing to things like Tom Holland as Spiderman and Carly Rae Jepsen''s latest album drop. "BIG TREE", you tell yourself, trying to maintain focus, "GIANT!"..."UGE"..."THE BIGGEST" Your thoughts are clearly getting away from you and just as soon as you think you''ve lost it...'),
  (4, 'scene 4, dialogue 21 - ...You run right smack-dab into the tallest tree you''ve ever seen. To be fair, Zoomieville doesn''t have trees, but you''ve seen them in movies so you know, this is a big''un. Looking around, you dont see a soul, when suddenly you hear a faint squeaking sound and look down...'),
  (4, 'scene 4, dialogue 22 - Near your feet, there is a MEDIUM SIZED snail. Not that small, but not that big... It is it can be firmly categorized as medium-sized. "SNAILS SQUEAK!?" you gasp aloud. Life is stranger than fiction.'),
  (4, 'scene 4, dialogue 23 - SNAIL: "HELP ME! I have been transformed into a snail by a wicked imp! The only way the spell can be reveresed is by collecting ten special herbs, but I am too slow and by the time I gather one, the others have blown away! Will you help!? Pretty-please-with-sugar-on-top!?" [click the herbs on the page to help the snail]'),
  (4, 'scene 4, dialogue 24 - SNAIL: "REALLY?! You won''t help a snail out? Curse you!  I hope you find your dad, Buddy!"  She "STORMS" off.... or, rather, slowly slides away... You wouldn''t trust that snail for a million bitcoins'),
  (4, 'scene 4, dialogue 25 - SNAIL: "SHORTY, YOU''RE MY ANGEL. YOU''RE MY DARLING ANGEL. YOU''RE MY FRIEND WHEN I''M IN NEED. THANK YOU!" In this moment, you realize she clearly been a snail since the turn of the century and decide it best not to fill her in on the state of current affairs.'),
  (4, 'scene 4, dialogue 26 - The snail eats the herbs you lay in front of her and -- like a phoenix rising from the ashes - she is magically transformed to her former humanly form! "Flabberghasted" is an understandment but you can think of no other words to describe the bewilderment you feel. You think, "Maybe I do believe in spookums, afterall." The snail-woman thanks you and asks if there is anything she can do for you on your journey?'),
  (4, 'scene 4, dialogue 27 - Mouth agape at the magic that unraveled before you very eyes, you don''t have your wits about you she removes her necklace and offers it to you... on it dangles the sapphire shard you seek. The snail-woman, enthusiastic about your quest and her newfound body, leads you toward a path that leads to the ruins of the lost templ of the Sapphire Monkey.'),

  -- Scene 5

  (5, 'scene 5, dialogue 28 Holy monkey bananagrams, you are inside of the Sapphire Monkey Temple! Is is a magical place -- smells a little funny. A small price to endure to save Mother Earth and all of her children. Honestly, you never thought you''d make it this far but you''re feeling #blessed about the quest.'),
  (5, 'scene 5, dialogue 29 Now, where in the name of Jimminy Cricket is that darn monkey? You search high and low to uncover this important shrine. You wish your mom was with you because she can always find your things you''ve misplaced around the house. She would know where to look...'),
  (5, 'scene 5, dialogue 30 AHA! There! In the rubble. You spot a tiny, concrete monkey fist rising victorous from the rubble. This feels like a fever dream but you know deep down, it''s real. Just to be certain, you reach toward the monkey arm and for a moment, you look like God and Adam in the Michaelangelo painting on the Sistine Chapel. Time to return the sapphire shards to their rightful destination..' ),
  (5, 'scene 5, dialogue 31 OooOoOoOooOOoohhhh noOoOooOoooOO! You blink hard and think: "Is that a boulder rolling my way!?" To nobody in particular, you shout:  "RUN!" [press the A and S keys quickly on the next page to escape the boulder]'),

  --boulder runaway scene
  (5, 'scene 5, dialogue 32 WOMP WOMP WOMP - smashed by a boulder. It was not on your list of potenital ways to die, but you''ve been forced to settle. GAME OVER'),
  (5, 'scene 5, dialogue 33 CLOSE CALL! Good thing you''re a speedy little spook! Now, back to monkey business...'),
  (5, 'scene 5, dialogue 34 You rustle around in your fanny pack to locate the shards you''ve come all this way to return. You think back on all of the delightfully puzzling encounters you''ve had along the way. You cannot wait to tell the old man back home. Listenin to his delerium enabled you to help the Sapphire Monkey restore Earth. You have your victory speech all lined up. Very carefully, you reach to place those sapphire shards in the belly of the monkey king...'),
  (5, 'scene 5, dialogue 35 Oh, ZUT ALORS! That boulder chase made you forget everything! You did not find all of hte sapphires and fursiouly, begin to wonder aloud: "What am I doing here!? What is life!? Where are my Doritos!?" Maybe that "wise guy" wasn''t so wise afterall...'),
  (5, 'scene 5, dialogue 36 SRY! You will go down in the history books as a failure. But before you go, I''d like you to meet one last friend on this journey...'),
  (5, 'scene 5, dialogue 37 ZING! ZAP! HUZZAH! With the shards you provided, the sapphire monkey king rises to life, terrifying, awe-inspriring, and omnipoetent. Eyes aglow with the blue of sapphire , you know your gut istinct is right: this monkey is our savior.'),
  (5, 'scene 5, dialogue 38 With a flick of the wrist, the sapphire monkey spreads restoration to the land. Like Molly Weasely, the Sapphire Monkey knows how use its magic to multitask and you watch with gratitude as life rises up all around you.'),
  (5, 'scene 5, dialogue 39 YOU ARE A HERO OF OUR TIME! The sapphire monkey crowns you with rubies and explains that  these are the long-lost Orangutan Rubies! Your eyes lock and you share the knowing...there is more to this adventure... A quest for the RUBY ORANGUTAN!'),

  --adding buffer scene to scene 1
  (1, 'scene 1, dialogue 40 You follow the old man''s instructions and set off to find the alchemist.'),
  (5, 'RunningGame'),--41
  (2, 'ShiftingSands'),--42
  (5, 'BoulderDeath'),--43
  (5, 'Victory'),--44
  (5, 'No Gems'),--45
  (4, 'SnailGame'); --46


-- one badge per scene

INSERT INTO badges
  (title, description, image)
VALUES
  ('Sapphire Piece', 'First Sapphire Shard', '/assets/badges/01_sapphire_shard.png'),
  ('Sapphire Piece', 'Second Sapphire Shard', '/assets/badges/01_sapphire_shard.png'),
  ('Sapphire Piece', 'Third Sapphire Shard', '/assets/badges/01_sapphire_shard.png'),
  ('BigMac', 'Andy''s Badge', '/assets/badges/burger.png'),
  ('Pusheen', 'Lolcatsz', '/assets/badges/pusheen.png'),
  ('Narwhal', 'Hope u find ur dad, Buddy!', '/assets/badges/narwhal.png'),
  ('Boulder', 'Crushed by a Boulder!', '/assets/badges/rock.png'),
  ('Ruby Orangutan', 'A primate wants this back...', '/assets/badges/ruby.png');

INSERT INTO choices
  (dialogue_id, label, next_dialogue_id, badge_id, summary)
VALUES
  (1, 'Next', 2, null, null),
  (2, 'Next', 3, null, null),
  (3, 'Next', 4, null, null),
  (4, 'Next', 5, null, 'You were tasked with a an important mission to find three sapphire shards and return them to the monkey. This will restore balance in the universe and save our planet.'),
  (5, 'No', 1, null, 'You did not understand the mission at first and had listen to that old guy again.'),
  (5, 'Yes', 40, null, null),
  (40, 'Return to Map', null, null, 'Let the adventure begin!'),
  (6, 'Next', 7, null, null),
  (7, 'Next', 8, null, null),

  (8, 'Play Game', 42, null, null),
  (42, 'Fail to find the Shard', 9 , null, null),
  (9, 'Try Again', 42, null, null),
  (42, 'Lose the Shard forever', 10, null, 'The shard was forever lost in the sand'),
  (10, 'Map', null, 4, null),
  (42, 'Find the Shard', 11, null, 'You found the shard in the desert'),
  (11, 'Map', null, 1, null),

  (12, 'Next', 13, null, null),
  (13, 'Next', 14, null, null),
  (14, 'Next', 15, null, null),
  (15, 'Correct', 16, null, null),
  (16, 'Return to Map', null, 2, null),
  (15, 'Wrong', 17, null, null),
  (17, 'Success', 18, null, null),
  (18, 'Return to Map', null, null, null),
  (17, 'Wrong', 19, null, null),
  (19, 'Return to Map', null, 5, null),
  (20, 'Next', 21, null, null),
  (21, 'Next', 22, null, null),
  (22, 'Next', 23, null, null),
  (23, 'No', 24, null, null),
  (24, 'Return to Map', null, 6, null),
  (23, 'Yes', 46, null, null),
  (25, 'Next', 26, null, null),
  (26, 'Next', 27, null, null),
  (27, 'Return to Map', null, 3, null),
  (28, 'Next', 29, null, 'You made it to the temple with no time to spare! You search diligently for the sapphire monkey'),
  (29, 'Next', 30, null, null),
  (30, 'Next', 31, null, 'A giant boulder seemingly emerges from the nethers and chases you down.'),
  (31, 'Play game', 41, null, 'You narrowly escape the boulder. Whew!'),
  --boulderdeath
  (32, 'Game Over', 43, 7, null),
  (33, 'Next', 34, null, 'Are the sapphrie shards nestled in your fanny pack, safe and sound?'),
  (34, 'No gems', 35, null, 'Uh-oh! There are no sapphires to offer to the monkey.'),
  (34, 'Yes gems', 37, null, 'Yes! Behold, the sapphire shards!'),
  (35, 'Next', 36, null, null),
  (36, 'Next', 45, null, 'An unsuccessful quest for the sapphires results in defeat and exhaustion. The world is a dumpster fire'),
  (37, 'Next', 38, null, null),
  (38, 'Next', 39, 8, 'All of humanity rejoices as the sapphire shards bring the monkey to life and the land is restored for all flora, fauna, Pokemon, and snails. You are a hero! The Sapphire Monkey reveals a Ruby Orangutan. Seems like there is more to this adventure...'),
  (39, 'You Won', 44, null, null),
  --added for boulder buffer
  (41, 'Escape!', 33, null , 'You narrowly escape the boulder. Whew!'),
  (41, 'Dead!', 32, null, 'DEATH BY BOULDER -- YIKES! Better luck next time.'),
  (43, 'Return to Title', null, null, null),
  --victory scene
  (44, 'Return to Title', null, null, null),
  --no gems
  (45, 'Return to Title', null, null, null),
  --yes to snail game 
  (46, 'Yes', 25, null, null),
  (46, 'Yes', 25, null, null);

-- adventures 

-- INSERT INTO adventures
--   (user_id, scene1, scene2, scene3, scene4, scene5)
-- VALUES
--   (1, 'ONE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'TWO Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet. ', 'THREE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'FOUR Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet.', 'FIVE Vestibulum pharetra libero nisi, vel placerat purus vestibulum sit amet. ' );
