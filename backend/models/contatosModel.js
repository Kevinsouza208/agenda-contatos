const connection = require("../database/connection");

function listarContatos(callback) {
    const sql = "SELECT * FROM contato";

    connection.query(sql,callback);
}

module.exports = {
    listarContatos
};