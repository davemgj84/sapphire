# USER STORIES

- As a USER - I can visit the home/title page
- As a USER - I can choose to login or continue as guest on home/title page
- As a USER - I can choose to login - it will keep track of badges(accomplishments)
- As a USER - I can collect badges and view them in my profile
- As a USER - I can start a new game
- As a USER - I select a character(avatar) I want to play as
- As a USER - I can move my Avatar on the map
- As a USER - I can enter into story scenes
- As a USER - I am motivated by the story
- As a USER - I feel like my choices matter (interactive)
- As a USER - I cannot backtrack (choices matter) - only move forward
- As a USER - I can solve puzzles/riddles/games within story scenes
- As a USER - I can move back to the map, to move onto the next chapter - REPEAT
- As a USER - I have visual feedback about progress in border
- As a USER - I can see a summary of my adventure - star wars style(scrolling)
- As a USER - I can start a new game to try to collect all badges (badges I may have missed)

# ERD

![ERD DIAGRAM](https://github.com/davemgj84/sapphire/blob/master/planning/Sapphire.jpg?raw=true)

# ROUTES

## Page routes

- /GET Home "/"
- /GET Login "/login"
- /GET Logout "/logout"
- /GET Register "/register"
- /POST New User "/user/new"

## Database routes

- /GET Scenes "/scene/:id"
- /GET Badges "/scene/:id/badge/:id"
- /GET Dialogues "/scene/:id/dialogue/:id"
- /GET Adventures "/adventure/:id"

![WIREFRAMES](https://github.com/davemgj84/sapphire/blob/master/planning/Sapphire%20-%20Wireframes.jpg?raw=true)
