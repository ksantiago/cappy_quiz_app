function changeH1() {
  $('h1').text('Jabba Jive');
  $('body').addClass('pink');
  $('button').attr("disabled","disabled");
}

$(document).ready(function(){
  $('button').on('click', changeH1);
});