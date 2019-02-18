
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tweets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tweets').insert([
        {id: 10, text: 'Hi I am Bob', tweeted_at: 1550524671777, user_id: 1 },
        {id: 20, text: 'Hi I am Alice', tweeted_at: 1550524683447, user_id: 2 },
        {id: 30, text: 'Hi I am stealing your data', tweeted_at: 1550524695104, user_id: 3 },
      ]);
    });
};
