const express = require("express");
const connection = require("./database/connection");
const contatosRoutes = require("./routes/contatosRoutes"); 
const app = express();
const PORT = 3000;


 app.use(express.static("frontend"));

 app.use("/contatos", contatosRoutes);
 
app.listen(PORT, ()   => {console.log('Servidor executando em http://localhost:3000');});
                    