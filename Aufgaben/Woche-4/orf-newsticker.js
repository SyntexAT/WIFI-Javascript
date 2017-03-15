;(function($){
  'use strict';


    var newsbar, ticker, slide;

    var getNews = function(){
      $.ajax({
        url:'http://wifi.1av.at/516/tn/news.php',
        success: function(data) {
          var link, title, newsUL, newsLI;

          newsUL = $('<ul>').css({
            display: 'flex',
            margin: 0,
            padding: 0,
            position: 'absolute',
            left: $('.newsbar__ticker').width()
          }).appendTo('.newsbar__ticker');

          $(data).find('.grid.news a').each( function(){

            newsLI = $('<li>').css({
              listStyleType: 'none',
              whiteSpace: 'nowrap',
              marginLeft: 25,
              marginRight: 25
            }).appendTo(newsUL);

            link = $(this).attr('href');
            title = $('h1', this).html();
            $('<a>').css({
              textDecoration: 'none',
              fontSize: '25px',
              lineHeight: '1.2em',
              color: '#fff'
            })
            .attr('href', link)
            .html(title)
            .appendTo(newsLI);

          });
        }
      });
    }

    var moveNews = function(){
      var ul, div, ulPosition, ulWidth;
      div = $('.newsbar__ticker');
      ul = $('.newsbar__ticker > ul');
      ulPosition = parseInt(ul.css('left'));
      ulWidth = ul.width();
      if(ulPosition > -ulWidth){
        ul.css({
          left: ulPosition - 1
        })
      } else {
        ul.css({
          left: div.width()
        })
      }
    }

    $(document).ready(function(){
      $('body').css('font-family', 'Arial');
      newsbar = $('<div>').css({
        position: 'fixed',
        bottom: 0,
        left: 0,
        background: '#5286c1',
        height: 80,
        width: '100%'
      }).addClass('newsbar').appendTo('body');

      ticker = $('<div>').css({
        height: 30,
        width: '90%',
        margin: '25px auto',
        background: '#4371a3',
        overflow: 'hidden',
        position: 'relative'
      }).addClass('newsbar__ticker').appendTo(newsbar);

      getNews();

      setInterval(moveNews, 10);

    });

}(jQuery));
