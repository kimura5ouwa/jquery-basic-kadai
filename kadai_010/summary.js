$(function() {
//文字色変化
$('#change-color').on('click', function () {
  $('#target').css('color', 'pink');
});

//文字変化
$('#change-text').on('click', function() {
  $('#target').text('HELLO!');
});
//フェードアウト
$('#fade-out').on('click', function() {
  $('#target').fadeOut();
});
//フェードイン
$('#fade-in').on('click', function() {
  $('#target').fadeIn();
});
});