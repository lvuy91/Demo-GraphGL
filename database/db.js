var { DataStore } = require("notarealdb");

const store = new DataStore('./database/data');

module.exports = {
    store: store,
   students:store.collection('students'),
   colleges:store.collection('colleges')
};