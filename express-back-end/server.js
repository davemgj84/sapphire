require("dotenv").config();
const {
  getSceneById,
  getDialoguesBySceneId,
  getBadgesbyUserID,
  getAllBadges,
} = require("./database/queries");

const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "sapphire";

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

App.get("/api/scene/:id", async (req, res) => {
  const id = req.params.id;
  const scene = await getSceneById(id).catch((err) => console.log(err));
  const dialogues = await getDialoguesBySceneId(id);
  // Break down the data into something you can easily search (like an object)
  const response = { scene, dialogues };
  res.json(response);
});

//route to grab all badges (no association with a specific user)
App.get("/api/badges", async (req, res) => {
  const badges = await getAllBadges();
  res.json(badges);
});

App.get("/api/badges/:id", async (req, res) => {
  const id = req.params.id;
  const badges = await getBadgesbyUserID(id).catch((err) => console.log(error));
  const response = { badges };
  res.json(response);
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
