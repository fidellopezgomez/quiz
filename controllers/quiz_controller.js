// Get /quizes/question
exports.question = function(req, res) {
  res.render('quizes/question',{ title: 'Quiz', pregunta: 'Capital de Italia' });
};

// Get /quizes/answer
exports.answer = function(req, res) {
  if(req.query.respuesta === 'Roma'){
    res.render('quizes/answer',{ title: 'Quiz', respuesta: 'Correcto!' });
  } else {
    res.render('quizes/answer',{ title: 'Quiz', respuesta: 'Incorrecto...' });
  }
};

// Get /author
exports.author = function(req, res) {
	res.render('author',{ title: 'Quiz', name: 'Fidel López', description: 'Hola! soy un chico informático afincado en Salamanca. Trabajo en una empresa de desarrollo de aplicaciones móviles.', photo: 'images/mi_face.jpg', alt_img: 'soy yo!'});
}
