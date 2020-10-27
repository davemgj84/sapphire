require("dotenv").config();
const { getDialogueBySceneID } = require("./database/queries");

const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = process.env.PORT || 8081;
const ENV = process.env.ENV || "sapphire";
// const { Pool } = require("pg");
// const dbParams = require("./routes/db");
// const pool = new Pool(dbParams);
// pool.connect();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/data", (req, res) => {
  getDialogueBySceneID(1)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err))
    .finally(() => res.send("Hello"));

  // res.json({
  //   message: "Seems to work!",
  // })
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
