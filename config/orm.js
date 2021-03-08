const connection = require('./connection.js');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

const orm = {
  selectAll(tableName) {
    const queryString = 'SELECT * FROM ??';
    connection.query(
      queryString,
      [tableName],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  insertOne(table, whatToInsert1, whatToInsert2) {
    const queryString = 'INSERT INTO ?? (burger_name, devoured) VALUES (? , ?)\;';
    console.log(queryString);
    connection.query(
      queryString,
      [table, whatToInsert1, whatToInsert2],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  
  updateOne(tableName, updateColumn, updateValue , burgerId) {
    const queryString =
      'UPDATE ?? SET ?? = ? WHERE id = ?\;';
       console.log(queryString);
    connection.query(
      queryString,
      [tableName, updateColumn, updateValue, burgerId],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
};

module.exports = orm;
