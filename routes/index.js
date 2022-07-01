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
    var color = [];
    for (let i in Todo) {
      // console.log(i);
      if (Todo.at(i).category == 'personal')
        color.push("blue");
      if (Todo.at(i).category == 'work')
        color.push('#9C27B0');
      if (Todo.at(i).category == 'school')
        color.push('#2196F3');
      if (Todo.at(i).category == 'cleaning')
        color.push('#388E3C');
      if (Todo.at(i).category == 'other')
        color.push('#AB47BC');
    }
    // console.log(color);
    return res.render('home', {
      title: 'Home',
      list: Todo,
      Color: color
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