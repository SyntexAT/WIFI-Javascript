/*

  Da schreibt man halt irgendetwas rein.

*/
(function($){

  $.fn.red = function( options ){
    var settings = $.extend({ // die Options von der Funktion werden in das Objekt settings erweitert
      r:150,
      g:0,
      b:0
    }, options);

    return this.each(function(){
      if($(this).hasClass('x')){
        $(this).css({color: 'rgb('+ settings.r + ',' + settings.g + ',' + settings.b +')'});
      }
    });

    //return this;
  } // Transparente jQuery Funktion - Rückgabewert(return this)

  $.fn.formatNumbers = function(options){
    var decoration = '';
    var settings = $.extend({
      color:        'red',
      fontWeight:   'bold',
      underline:    false,
      stroke:       false
    }, options);

    return this.each(function(){
      if(settings.underline == true){decoration += 'underline'}
      if(settings.stroke == true){decoration += ' line-through'}

      var wrapNumber = function(s){
        var sOut = '';
        for( var i in s){
          sOut += isFinite(s[i]) && s[i] != ' ' ? '<n>'+s[i]+'</n>' : s[i];
        }
        return sOut;
      }

      var neuerInhalt = wrapNumber($(this).html());
      $(this).html(neuerInhalt);


      $('n', this).css({
        color: settings.color,
        fontWeight: settings.fontWeight,
        textDecoration: decoration
      });

    });

  }

}(jQuery));
