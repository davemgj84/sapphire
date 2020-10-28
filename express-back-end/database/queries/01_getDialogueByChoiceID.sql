SELECT story FROM dialogues
JOIN choices ON dialogues.id = choices.dialogue_id
WHERE dialogues.id = next_dialogue_id;