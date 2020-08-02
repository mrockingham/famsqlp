const db = require("../data/connection");


module.exports = {
    add,
    find,
    findinfo,
    findById,
    findExpenseApp,
    findBy,
    update,
    remove,
};

function find() {
    return db("user as u")
        .orderBy("u.id");
}
function findinfo() {
    return db("user as u")
        .select('u.id', 'u.username', 'u.email')
        .orderBy("u.id");
}

async function add(user) {
    try {
        const [id] = await db("user").insert(user, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}
function findById(id) {
    return db("user").where({ id }).first();
}

function findBy(filter) {
    return db("user as u")
        .where(filter)
        .select("u.id", "u.username", 'u.email', "u.password")
        .orderBy("u.id");
}



function update(id, changes) {
    return db('user')
        .where({id})
        .update(changes)
}



function remove(id) {
return db('user')
    .where('id',id)
    .del()
}

//// Applications


function findExpenseApp(id){
    return db('expense_app')
    .join('comments', 'comments.profile_id', 'profile.id')
    .select('profile.username', 'profile.email', 'comments.comment', 'comments.troll_name', 'comments.karma', 'comments.id' )
    .where('profile.id', id)
    .orderBy('comments.karma')
}