    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: null,
        database: 'bebas'
    });

    connection.connect();

    module.exports = connection;