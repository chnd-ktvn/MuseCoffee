const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'muse_coffee',
  timezone: 'UTC'
})
connection.connect((error) => {
  if (error) {
    return console.log(`Turn on the database!
    ${error}`)
  } else {
    return console.log('You are now connected to database.')
  }
})
module.exports = connection
