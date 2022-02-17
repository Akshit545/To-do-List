$('#desc-input').focus(function () {
  $('#desc-input').css('backgroundColor', 'rgb(213, 178, 178)');
  $('#desc').css('backgroundColor', 'rgb(213, 178, 178)');
});

$('#desc-input').blur(function () {
  $('#desc').css('backgroundColor', 'white');
  $('#desc-input').css('backgroundColor', 'white');
});

$('#category').focus(function () {
  $('#cate').css('backgroundColor', 'rgb(213, 178, 178)');
  $('#category').css('backgroundColor', 'rgb(213, 178, 178)');
});

$('#category').blur(function () {
  $('#cate').css('backgroundColor', 'white');
  $('#category').css('backgroundColor', 'white');
});

$('#duedate').focus(function () {
  $('#date').css('backgroundColor', 'rgb(213, 178, 178)');
  $('#duedate').css('backgroundColor', 'rgb(213, 178, 178)');
});

$('#duedate').blur(function () {
  $('#date').css('backgroundColor', 'white');
  $('#duedate').css('backgroundColor', 'white');
});

$('input[id=check]').click(function (e) {
  $('input[id=check]:checked').parent().attr('action', 'delete-list');
  $('input[id=check]:checked').parent().attr('id', 'delete-it');
  $('#inst-details').css("color", "lightgrey");
  $('#inst-details h1').css("text-decoration", "line-through");
  $('#inst-date').css("text-decoration", "line-through");
});