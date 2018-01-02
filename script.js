
var fetch = function () {
  var buildUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+$("#ISBN").val();
  $.ajax({
    method: "GET",
    url: buildUrl,
      success: function(data) {
        var source = $("#book-template").html();
        var template = Handlebars.compile(source);
        var newHTML = template(data);
        $(".books").append(newHTML);
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
  }); 
  $('#ISBN').val("");
};

$(".search").on('click', fetch);