
exports.up = function(knex) {
    return knex.schema.createTable('user', tbl =>{
        tbl.increments()
        tbl.text('username')
        tbl.text('email')
        tbl.text('password').notNullable()
        tbl.text('firstName')
        tbl.text('lastName')

    })
    .createTable('expense_app', tbl =>{
        tbl.increments()
        tbl.text('expense_name')
        tbl.timestamps('created_at')
        //forigen key
        tbl.integer('expenseUser_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASCADE  ')
        
    })
    .createTable('expense', tbl =>{
        tbl.increments()
        tbl.text('transaction')
        tbl.integer('amount')
        tbl.timestamps('created_at')
        //forigen key
        tbl.integer('expenseApp_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('expense_app')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('shopping_list', tbl =>{
        tbl.increments()
        tbl.text('name')
        tbl.timestamps('created_at')
        //forigen key
        tbl.integer('shoppingListUser_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')    
    })

    .createTable('shoppingList_items', tbl =>{
        tbl.increments()
        tbl.text('item_name')
        tbl.integer('price')
        tbl.timestamps('created_at')
        //forigen key
        tbl.integer('shoppingList_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')    
    })  

  
};

exports.down = function(knex) {
  
};
