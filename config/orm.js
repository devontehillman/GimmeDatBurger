const connection = require('./connection.js');



// Object Relational Mapper (ORM)
const orm = {
  selectAll(tableName,callback) {
    const queryString = 'SELECT * FROM ??';
    connection.query(
      queryString,
      [tableName],
      (err, result) => {
        if (err) throw err;
        callback(result);
      }
    );
  },
  insertOne(table, whatToInsert1, whatToInsert2, callback) {
    const queryString = 'INSERT INTO ?? (burger_name, devoured) VALUES (? , ?)\;';
    console.log(queryString);
    connection.query(
      queryString,
      [table, whatToInsert1, whatToInsert2],
      (err, result) => {
        if (err) throw err;
        callback(result);
      }
    );
  },
  
  updateOne(tableName, updateColumn, updateValue , burgerId, callback) {
    const queryString =
      'UPDATE ?? SET ?? = ? WHERE id = ?\;';
      console.log(queryString);
      connection.query(
      queryString,
      [tableName, updateColumn, updateValue, burgerId],
      (err, result) => {
        if (err) throw err;
        callback(result);
      }
    );
  },
};

module.exports = orm;
