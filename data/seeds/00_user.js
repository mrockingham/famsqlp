
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1, username: 'michael',
          email: 'mikey@gmail.com',
          password: 'password',
          firstName: 'Michael',
          lastName: 'Rockingham'
        },
        
      ]);
    });
};
