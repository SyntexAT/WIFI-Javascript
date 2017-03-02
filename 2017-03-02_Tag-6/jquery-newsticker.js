;(function($){
  'use strict';

  $.fn.newsticker = function( options ) {
    var settings = $.extend({
      width: options.width || 300,
      speed: options.speed || 10
    }, options);

    var runnerPosition, runnerWidth, moveIt;

    return this.each(function(i){
      var _this = this;
      // Wrapper Newsticker
      $(this).css({
        width: settings.width,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid #000',
        height: '1.25em'
      });

      var runner = $('<div>')
      .html($(this).html())
      .css({
        position: 'absolute',
        left: settings.width,
        'white-space': 'nowrap'
      });

      $(this).empty().append(runner);

      var moveRunner = function(){
        runnerPosition = parseInt(runner.css('left'));
        runnerWidth = runner.width();
        if(runnerPosition > -runnerWidth){
          runner.css({
            left: runnerPosition - 1
          })
        } else {
          runner.css({
            left: settings.width
          })
        }
      }

      $(this).on('mouseover', function(){
        clearInterval(moveIt);
      }).on('mouseout', function(){
        moveIt = setInterval(moveRunner, settings.speed);
      });

      moveIt = setInterval(moveRunner, settings.speed);

      /* Animation über jQuery
      Kann nicht gestoppt werden!

       var run = funciton(){
       runner.css('left',settings.width);
       runner.animate({
       left: -runner.width()
     }),5000, 'linear', run);

     run();
     }
     */

    });
  }

}(jQuery));
