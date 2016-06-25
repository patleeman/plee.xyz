

$(document).ready(function(){
  // Get pathname
  pathname = window.location.pathname
  path_split = pathname.split("/")
  path = path_split[path_split.length - 1]

  destination_url = lookup_path(path)

  if (destination_url && destination_url != undefined){
    $(location).attr("href", destination_url);
  } else {
    $(location).attr("href", "notfound.html");
  }

});

// Lookup path in data file
function lookup_path(key) {
  url = URL_LOOKUP[key];
  return url;
}
