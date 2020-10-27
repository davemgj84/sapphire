const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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
//catch on parents
const getDialogueBySceneID = function (sceneID) {
  const sql = ` SELECT * FROM dialogues WHERE scene_id = $1`;
  const query = pool.query(sql, [sceneID]);

  return query
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch((err) => {
      console.log(err.stack);
      throw `${err.code} executing fetch`;
    });

  // return pool
  //   .query(
  //     `
  // SELECT * FROM dialogue
  // WHERE scene_id = $1`,
  //     [`${sceneID}`]
  //   )
  //   .then((res) => {
  //     return res.rows[0];
  //   });
  // .catch((err) => err);
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

module.exports = {
  getUserWithEmail,
  getDialogueBySceneID,
  getBadgesbyUserID,
  getsAdventurebyUserID,
};
