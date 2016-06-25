

$(document).ready(function(){
  var redirect_url;
  redirect_url = $('#redirect_url').html();

  // Get pathname
  pathname = window.location.pathname
  path_split = pathname.split("/")
  path = path_split[path_split.length - 1]

  // Lookup pathname in data
  path = path_lookup(path)

  console.log(path);
  //$(location).attr("href", redirect_url);
});

function path_lookup(key) {
  url = URL_LOOKUP[key];
  if (url){
    return url;
  } else {
    console.log(url);
    return null;
  }
}
