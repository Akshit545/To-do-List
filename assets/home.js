$('#desc-input').focus(function () {
  $('#desc-input').css('backgroundColor', 'lightgrey');
  $('#desc').css('backgroundColor', 'lightgrey');
});

$('#desc-input').blur(function () {
  $('#desc').css('backgroundColor', 'white');
  $('#desc-input').css('backgroundColor', 'white');
});

$('#category').focus(function () {
  $('#cate').css('backgroundColor', 'lightgrey');
  $('#category').css('backgroundColor', 'lightgrey');
});

$('#category').blur(function () {
  $('#cate').css('backgroundColor', 'white');
  $('#category').css('backgroundColor', 'white');
});

$('#duedate').focus(function () {
  $('#date').css('backgroundColor', 'lightgrey');
  $('#duedate').css('backgroundColor', 'lightgrey');
});

$('#duedate').blur(function () {
  $('#date').css('backgroundColor', 'white');
  $('#duedate').css('backgroundColor', 'white');
});

$('input[id=check]').click(function (e) {
  $('input[id=check]:checked').parent().attr('action', 'delete-list');
  $('input[id=check]:checked').parent().attr('id', 'delete-it');
  // $($('input[id=check]:checked').parent().parent().parent()[0].id + ' ').css(propertyName, value);
  $('input[id=check]:checked').parent().parent().children('#inst-details').css(
    {
      textDecoration: 'line-through',
      color: 'lightgrey'
    }
  );
});