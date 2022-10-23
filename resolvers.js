const db = require('./database/db');

const Query = {
  test: () => "Test Success, GraphQL server is up & running !!",
  students:() => db.students.list()//.list()
};

module.exports = { Query };
