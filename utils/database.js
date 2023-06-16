import mysql from 'mysql'

const connection = mysql.createConnection({
    host: process.env.HOST, 
    user: process.env.USER, 
    password: process.env.PASSWORD, 
    database: process.env.DATABASE
})

export default connection