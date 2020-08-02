const db = require('../data/connection')

module.exports ={
add,
find,
findById,
update,
remove
}


async function add(expenses) {
    try {
        const [id] = await db("expense").insert(expenses, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}

function find() {
    return db("expense as e")
        .orderBy("e.id");
}

function findById(id) {
    return db('expense')
      .where({ id })
      .first();
  }

  function update(id, changes) {
    return db('expense')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('expense')
      .where('expenseApp_id', id)
      .del();
  }