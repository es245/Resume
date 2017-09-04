var w = $('#course1').width();
console.log(w);

$('.course').click(function(){
  $(this).css('position', 'absolute');
  $(this).css('width', w);
});
