const connection = require('../index')
const { readFileSync } = require('node:fs')

let query = readFileSync('sql/tes2.sql', 'utf-8')

connection.query(query, function (error, results, _fields) {
	if (error) throw error
	console.log(results)
})
