$(document).ready(function(){
  output = "<ul>"

  for (var short in URL_LOOKUP){
    output = output + "<li><a href=" + URL_LOOKUP[short] + ">" + short + "</a></li>"
  }

  output = output + "</ul>";
  console.log(output);
  $(".urllist").html(output);
})
