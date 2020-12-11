const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'coba',
  timezone: 'UTC'
})
connection.connect((error) => {
  if (error) {
    console.log('Turn on the database!')
    throw error
  } else {
    console.log('You are now connected to database.')
  }
})
module.exports = connection
