const connection = require('./connection.js');

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

const orm = {
  selectAll(tableInput, colToSearch, valOfCol) {
    const queryString = 'SELECT * FROM ??';
    connection.query(
      queryString,
      [tableInput],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  insertOne(table, whatToInstert) {
    const queryString = 'INSERT INTO ?? VALUES ? ';
    console.log(queryString);
    connection.query(
      queryString,
      [table, whatToInsert],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  
  updateOne(tablename, updateInfo, bugerId) {
    const queryString =
      'UPDATE ?? SET ? WHERE ID = ?;
       console.log(queryString);
    connection.query(
      queryString,
      [table, whatToInsert],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
module.exports = orm;
