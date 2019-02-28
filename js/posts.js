(function($) {
  $('#change-quote').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      method: 'get',
      url:
        qod_vars.rest_url +
        'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', qod_vars.wpapi_nonce);
      }
    }).done(function(response) {
      $('.entry-content')
        .empty()
        .append('<p>' + response[0].content.rendered + '</p>');
      $('.entry-title')
        .empty()
        .append('<h2>&#8211;' + response[0].title.rendered + '</h2>');
      if (response[0]._qod_quote_source_url.length > 0) {
        $('.source')
          .html('<span><a href="'+ response[0]._qod_quote_source_url+'">'+ response[0]._qod_quote_source + '</span>');
        }else if(response[0]._qod_quote_source_url.length <= 0){
            $('.source')
            .html("<span>" + response[0]._qod_quote_source + "</span>");
      }else{
          $('.soucre').empty();
      }

    }).fail(function(response) {
        $(".entry-content").append(
          "<p> Sorry the articles were unable to be found </p>"
        );
      });
  });
})(jQuery);
