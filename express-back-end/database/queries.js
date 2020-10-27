const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const getUserWithEmail = (email) => {
  const sql = `SELECT * FROM users WHERE email = $1`;
  const query = pool.query(sql, [email]);

  return query
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => err);
};

const getDialogueBySceneID = (sceneID) => {
  const sql = `SELECT * FROM dialogues WHERE scene_id = $1`;
  const query = pool.query(sql, [sceneID]);

  return query
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      throw `${err.code} executing fetch`;
    });
};

const getBadgesbyUserID = (userID) => {
  const sql = `SELECT * FROM badges WHERE user_id = $1`;
  const query = pool.query(sql, [userID]);

  return query
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => err);
};

const getsAdventurebyUserID = (userID) => {
  const sql = `SELECT * FROM adventures WHERE user_id = $1`;
  const query = pool.query(sql, [userID]);

  return query
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => err);
};

module.exports = {
  getUserWithEmail,
  getDialogueBySceneID,
  getBadgesbyUserID,
  getsAdventurebyUserID,
};
