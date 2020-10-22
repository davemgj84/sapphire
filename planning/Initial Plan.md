# Quest for the Sapphire Monkey

## User experience

- An interactive story driven user experience
- Different paths lead the user to solve puzzles/riddles/mini-games on their adventure
- Level completion? Other routes to experience? Percentage based? Exploration? Badges
-

## Story

- Single driving force - what does the character hope to achieve?
- Dream Sequence?
- Indianna Jones vibes?
- The quest for the legendary Sapphire Monkey - an ancient idol from myth and legends?

## UI

- Pixel Art - Retro Vibes
- Mario world type map - top down - pathway - choosing user exploration

  ![Example world](https://i.ytimg.com/vi/1FnPe6tinVs/hqdefault.jpg)

- Keagan's example map mockup

  ![Mockup](https://cdn.discordapp.com/attachments/766181002904731678/768204927910412288/test.png)

- Choose from 3 different characters - Example from - Hero's Quest (1989)

  ![Example character Select](https://www.myabandonware.com/media/screenshots/h/heros-quest-so-you-want-to-be-a-hero-25k/heros-quest-so-you-want-to-be-a-hero_5.gif)

- Research Jen did on potential map movement

  ![writeup](https://cdn.discordapp.com/attachments/766181002904731678/766181254637813760/jen-plan.jpg)

- Pixeler - (https://pixlr.com/)
- Tiled - (https://www.mapeditor.org/)
- Aseprite - (https://www.aseprite.org/)

## Stack

- React
- NodeJS/Express
- Psql
- Heroku
- Phaser JS? - maybe for the over world? map?
- How to integrate it with React?

## To do List

- User Stories
- Wireframe /mockups layout
- Routes
- Write the story lines - get creative!
- Create backgrounds for various points in map/story
- Create three unique characters with their own back story - One each
- Create a variety of puzzles/mini-games/quizes the player needs to overcome

## Snippets

- Typewriter for text?

```
const typewriter = (interval, sentence) => {
  let counter = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, counter);
    counter += interval;
  }
  setTimeout(() => {
    console.log();
  }, counter);
};

typewriter(50, "Be the change you want to see in the world! <3");

module.exports = typewriter;
```

## Stretch

- Web sockets? Not sure if we need it as it will be single player
- Comments on player summaries - likes etc

# STORYLINE

- McGuffin - Search for the Saaphire Monkey (Goal)

- Single Character story - potentially different avatars (MVP)

- What is the Saaphire Monkey -

  - Ancient Relic Saaphire Monkey - Legend? Myth?
  - Impending Doom? Returning the Relic to its complete state will save the planet
  - We find sections of the Gem - 3 shards total
  - Once collected they magically become one again
  - We now must return the whole sapphire to the monkey

- Also find easter eggs that are not the gem - random stuff - work with badges

- Collection of hints that lead character to find Saaphire Monkey

## MVP/MVD

- Login to save progress or continue as guest

- Game State
  - Title screen - hit space to begin (saaphire monkey title)
  - Single Character Frame (choose character)
  - Background art - world looks dying - the closer you get to the endgame it becomes more alive
  - Create 5 frames(stops on the map)
  - 3 for the gems, 1 random, 1 endstate
  - Happy Path

# STORYLINE DETAILS - STEPS

- Story Introduction - PART 1

  - Elder describes state of the world - impending doom
  - Gives Quest to find the 3 shards of the sapphire
  - Return whole sapphire to the legendary relic - Sapphire monkey
  - Queue interaction with USER - " Have you been listening/ do you understand?"
  - USER to respond with yes/no - buttons
  - Elder then says - then, first go to the desert and find the alchemist

- Let the game begin - PART 2

  - USER lands in the world map showing the various paths to go forward
  - USER moves to the next EVENT - which initiates a Story Component
  - Desert scene
  - Alchemist explains how to retrieve 1st sapphire shard
  - At sunrise: Puzzle => Shifting sands - series of prompts (arrow keys on keyboard)
  - SUCCESS - Write story surrounding your bravery in retrieving the gem in the shifting sands - alchemist tells you next clue - Find the hunter to find next sapphire
  - FAIL - Have to wait until next sunrise ( 3 chances )
  - Fades out/in to next day - Alchemist tries to help again with more direction
  - Repeat
  - FAIL ALL 3 ATTEMPTS? The alchemist is gone upon waking up, the sapphire is lost and doom is approaching - you must move forward without this shard. There is a note left from the alchemist - telling next clue - Find the hunter to find next sapphire

- PART 3

  - USER is now back to world map
  - Moves to next location EVENT on map
  - Grassland/Plains Scene
  - USER finds an old camp, expecting to the find hunter - sees no one
  - Searches the campsite looking for clues
  - USER is then surprised by the hunter - asked why YOU are there
  - You respond with Alchemist sent you - looking for a Sapphire shard
  - Hunter says he will help, but only if you answer his riddles
  - "This old one runs forever, but never moves at all. He has not lungs nor throat, but still a mighty roaring call. What is it?
  - OR
  - "Bright as diamonds, loud as thunder, never still, a thing of wonder"
  - Answer: "a waterfall"
  - SUCCESS - The hunter leads you to a roaring waterfall and you are told to venture behind to find what you seek. He also tells you find the wise hermit deep within the enchanted forest - near the great tree
  - FAIL - The hunter scoffs at you and just yells WATERFALL! - also tells you to find a wise hermit within the enchanted forest - near the great tree

- Part 4

  - USER is now back to world map
  - Moves to next location EVENT on map
  - Dense Forest Scene
  - USER travels deep within the forest looking for the wise hermit/great tree
  - The user finds the great tree, but no one to be found
  - You hear a small voice calling to you
  - You see a larger than average snail - THAT CAN TALK
  - She EXCLAIMS - yo what up - I am the wise hermit
  - USER !?
  - FIND THESE POTENT POTABLES SO I CAN BE CURED!
  - GAME TIME - GRAB THOSE HERBS
  - SAVE THE SNAIL - SNAIL TAKES THE HERBS - ROLLS IT UP and - In a puff of smoke is returned to her former self -
  - she gives you the last SHARD!
  - TELLS YOU WHERE TO FIND LOST TEMPLE OF THE SAPPHIRE MONKEY!

- Part 5

  - USER is now back to world map
  - Moves to next location EVENT on map
  - Lost Temple Scene
  - FIND THE SAPPHIRE MONKEY
  - BOULDER SCENE! RUN AWAY GAME!
  - SUCCESS! SAVE THE WORLD!
