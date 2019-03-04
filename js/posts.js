(function($) {
  let lastPage = '';
  $(window).on('popstate', function() {
    window.location.replace(lastPage);
  });
  $('#change-quote').on('click', function(event) {
    event.preventDefault();
    lastPage = document.URL;
    $.ajax({
      method: 'get',
      url:
        qod_vars.rest_url +
        'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', qod_vars.wpapi_nonce);
      }
    })
      .done(function(response) {
        const url = qod_vars.home_url + '/' + response[0].slug + '/';
        history.pushState(null, null, url);
        $('.entry-content')
          .empty()
          .append('<p>' + response[0].content.rendered + '</p>');
        $('.entry-title')
          .empty()
          .append('<h2>&#8211;' + response[0].title.rendered + '</h2>');
        if (response[0]._qod_quote_source_url.length > 0) {
          $('.source').html(
            '<span><a href="' +
              response[0]._qod_quote_source_url +
              '">' +
              response[0]._qod_quote_source +
              '</span>'
          );
        } else if (response[0]._qod_quote_source_url.length <= 0) {
          $('.source').html(
            '<span>' + response[0]._qod_quote_source + '</span>'
          );
        } else {
          $('.soucre').empty();
        }
      })
      .fail(function() {
        $('.entry-content').append(
          '<p> Sorry the articles were unable to be found </p>'
        );
      });
  });

  $('form').on('submit', function(event) {
    event.preventDefault();
    const quotes = {
      _qod_quote_source: $('#source').val(),
      _qod_quote_source_url: $('#url').val(),
      title: $('#author').val(),
      content: $('#quote-content').val(),
      post_status: 'pending',
      excerpt: $('#quote-content').val()
    };
    console.log(quotes);
    $.ajax({
      method: 'post',
      url: qod_vars.rest_url + 'wp/v2/posts',
      quotes,
      beforeSend: xhr =>
        xhr.setRequestHeader('X-WP-Nonce', qod_vars.wpapi_nonce)
    })
      .done(function() {
        $('#submit').html(qod_vars.success);
      })
      .fail(function() {
        $('#submit').html(qod_vars.failure);
      });
  });
})(jQuery);
