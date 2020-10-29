require("dotenv").config();
const {
  getDialogueBySceneID,
  getDialoguesById,
  getSceneById,
  getChoiceLabelsByDialogueID,
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

// Sample GET route
App.get("/api/data", (req, res) => {
  getDialogueBySceneID(1)
    .then((response) => {
      console.log("Server: ", response);
      res.json(response.story);
    })
    .catch((err) => console.log(err));
});

App.get("/api/scene/:id", (req, res) => {
  const id = req.params.id;
  getSceneById(id)
    .then((response) => {
      // console.log("Scene: ", response);
      res.json(response);
    })
    .catch((err) => console.log(err));
});

App.get("/api/dialogues/:id", (req, res) => {
  const id = req.params.id;
  getDialoguesById(id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
});

App.get("/api/choices/:id", (req, res) => {
  const id = req.params.id;
  getChoiceLabelsByDialogueID(id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
