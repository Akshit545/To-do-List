const express = require('express');
const router = express.Router();

const db = require('..//config/mongoose');
const Todo = require('..//models/todo');

console.log('Router loaded');

router.get('/', function (req, res) {
  Todo.find({}, function (err, Todo) {
    if (err) {
      console.log('error in fetching list');
      return;
    }
    return res.render('home', {
      title: 'Home',
      list: Todo
    });
  })
});

router.post('/create-list', function (req, res) {
  Todo.create({
    description: req.body.description,
    category: req.body.category,
    date: req.body.date
  }, function (err, newtodo) {
    if (err) {
      console.log('error in creating list', err);
      return;
    }
    console.log('***********', newtodo);
    return res.redirect('back');
  });
});

router.post('/delete-list', function (req, res) {
  // if (req.body.check == 'on')
  // console.log(req.body);
  var id = req.body.id;
  Todo.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log('error in deleting list data');
      return;
    }
    return res.redirect('back');
  });
});

module.exports = router;