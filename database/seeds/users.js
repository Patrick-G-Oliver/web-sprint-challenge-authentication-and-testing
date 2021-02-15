
// 
exports.seed = async function(knex) {
  // clears out the table so we can start fresh
  // truncate does more than .del(), like resetting the autoincrement counts
  await knex("users").truncate()
  // await knex("users").insert([
  //   { username: "fulano", password: "detal"},
  //   { username: "fulana", password: "detaltambien"},
  //   { username: "fulanito", password: "detallito"},
  // ])
};