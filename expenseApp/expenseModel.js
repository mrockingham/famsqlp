const db = require('../data/connection')

module.exports ={
add,
find,
findById,
update,
remove
}


async function add(expenseApp) {
    try {
        const [id] = await db("expense_app").insert(expenseApp, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}

function find() {
    return db("expense_app as e")
        .orderBy("e.id");
}

function findById(id) {
    return db('expense_app')
      .where({ id })
      .first();
  }

  function update(id, changes) {
    return db('expense_app')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('expense_app')
      .where('expenseUser_id', id)
      .del();
  }