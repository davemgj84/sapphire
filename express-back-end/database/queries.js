const { Pool } = require("pg");

const pool = new Pool({
  user: "sapphire",
  password: "sapphire",
  host: "localhost",
  database: "sapphire",
});

const getUserWithEmail = function (email) {
  return pool
    .query(
      `
  SELECT * FROM users 
  WHERE email = $1`,
      [`${email}`]
    )
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => err);
};

//needs user-id?
const getDialogueBySceneID = function (sceneID) {
  return pool
    .query(
      `
  SELECT * FROM dialogue 
  WHERE scene_id = $1`,
      [`${sceneID}`]
    )
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => err);
};

const getBadgesbyUserID = function (userID) {
  return pool
    .query(
      `
  SELECT * FROM badges
  WHERE user_id = $1`,
      [`${userID}`]
    )
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => err);
};

const getsAdventurebyUserID = (userID) => {
  return pool
    .query(
      `
  SELECT * FROM adventures
  WHERE user_id =$1`,
      [`${userID}`]
    )
    .then((res) => {
      return res.row[0];
    })
    .catch((err) => err);
};
