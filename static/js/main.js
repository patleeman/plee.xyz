$(document).ready(function(){
  var redirect_url;
  redirect_url = $('#redirect_url').html();
  $(location).attr("href", redirect_url);
});
