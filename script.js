var fetch = function () {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
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
  };


  // data.items[0].volumeInfo.title
  // data.items[0].volumeInfo.authors
  // data.items[0].volumeInfo.description
  // data.items[0].volumeInfo.imageLinks.thumbnail

$(".search").on('click', fetch);