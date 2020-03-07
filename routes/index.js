var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET cadastro page. */
router.get('/cad', function(req, res, next) {
  res.render('cad', { title: 'Express' });
});

/* POST cadastro page. */
router.post('/cad', function(req, res, next) {
	var nome = req.body.nome;
	res.redirect("/?nome=" + nome);
});

module.exports = router;
