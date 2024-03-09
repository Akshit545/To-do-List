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

$('input[id=check]').click(function () {
  for (var i = 0; i < $('input[id=check]').length; i++) {
    // console.log('dada');
    if ($('input[id=check]').eq(i).is(':checked')) {
      $('input[id=check]').eq(i).parent().attr('action', 'delete-list');
      $('input[id=check]').eq(i).parent().attr('id', 'delete-it');
      $('input[id=check]').eq(i).parent().parent().children('#inst-details').css(
        {
          textDecoration: 'line-through',
          color: 'lightgrey'
        }
      );
    }
    else {
      $('input[id=check]').eq(i).parent().attr('action', '');
      $('input[id=check]').eq(i).parent().attr('id', 'delete-inst');
      $('input[id=check]').eq(i).parent().parent().children('#inst-details').css(
        {
          textDecoration: 'none',
          color: 'black'
        }
      );
    }
  }
});