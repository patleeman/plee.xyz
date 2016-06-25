$(document).ready(function(){
  var redirect_url;
  redirect_url = $('#redirect_url').html();

  // Get pathname
  pathname = window.location.pathname;
  path_split = pathname.split("/")
  path = path_split[path_split.length - 1]

  // Lookup pathname in data


  console.log(URL_LOOKUP);
  //$(location).attr("href", redirect_url);
});
