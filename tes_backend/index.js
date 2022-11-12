require('dotenv').config()
const mysql = require('mysql')

const db = {
	host: process.env.HOST || 'localhost',
	user: process.env.USER || 'root',
	password: process.env.PASSWORD || '',
	database: process.env.DB || 'tes_fip',
}

const connection = mysql.createConnection(db)

connection.connect(function (err) {
	if (err) throw err
	console.log(`Connected to database ${db.database}`)
})

module.exports = connection
