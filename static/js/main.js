$(document).ready(function(){
  var redirect_url;
  redirect_url = $('#redirect_url').html();
  //$(location).attr("href", redirect_url);

  pathname = window.location.pathname;
  path_split = pathname.split("/")
  path = path_split[path_split.length - 1]
  console.log(path);

});
