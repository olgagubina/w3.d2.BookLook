
var source = $("#book-template").html();
var template = Handlebars.compile(source);

var fetch = function () {
  console.log($(".title").val());
  var buildUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + $(".title").val();
  $.ajax({
    method: "GET",
    url: buildUrl,
      success: function(data) {
        var newHTML = template(data);
        $(".books").append(newHTML);
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
    $(".title").val("");
  };

$(".search").on('click', fetch);