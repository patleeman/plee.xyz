$(document).ready(function(){
  // Get pathname
  pathname = window.location.pathname
  path_split = pathname.split("/")
  path = path_split[path_split.length - 1]
  // Lookup destination url
  destination_url = lookup_path(path)
  // Redirect if url found.
  if (destination_url && destination_url != undefined){
    $(location).attr("href", destination_url);
  } else {
    $(location).attr("href", "notfound/index.html");
  }
});

// Lookup path in data file
function lookup_path(key) {
  url = URL_LOOKUP[key];
  return url;
}
