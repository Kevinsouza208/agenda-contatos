const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"agenda_contatos"
});

connection.connect((erro) => {
    if(erro)  {
        console.eror("Erro ao conectar ao banco de dados:",erro);
        return;
}

      console.log("Conectado ao banco de dados agenda_contatos.");
});

module.exports = connection;