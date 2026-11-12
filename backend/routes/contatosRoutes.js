const express = require("express");

const contatosController = require("../controllers/contatosController");

const router = express.Router();

router.get("/",contatosController.listarContatos);

module.exports = router;