;(function($){
  'use strict';

    $.fn.makeNiceRadios = function( options ) {

      var clearRadios = function(){
        
      }

      var checkRadio = function(id){
        var canvas = $('.'+id).get(0);
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,25,25);
        ctx.lineWidth = 2;
        ctx.moveTo(5,5);
        ctx.lineTo(20,20);
        ctx.stroke();
        ctx.moveTo(5,20);
        ctx.lineTo(20,5);
        ctx.stroke();
        $('#'+id).prop('checked', true);
      }
      var uncheckRadio = function(id){
        var canvas = $('.'+id).get(0);
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,25,25);
        $('#'+id).prop('checked', false);
      }

      this.each(function() {
        var canvas = $('<canvas>');
        var canvasID = $(this).attr('id');
        canvas.attr({
          width: 25,
          height: 25,
          'data-name': $(this).attr('name')
        })
        .addClass(canvasID);
        $(this).after(canvas);




        $('.' + canvasID).on('click', function() {
          if($('#'+canvasID).is(':checked')){
            uncheckRadio(canvasID);
          } else {
            checkRadio(canvasID);
          }
        });
      });
    };

    $.fn.makeNiceCheckboxes = function( options ) {
      var checkCheckbox = function(id){
        var canvas = $('.'+id).get(0);
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 2;
        ctx.moveTo(5,17);
        ctx.lineTo(10,20);
        ctx.lineTo(20,5);
        ctx.stroke();
        $('#'+id).prop('checked', true);
      }
      var uncheckCheckbox = function(id) {
        var canvas = $('.'+id).get(0);
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,25,25);
        $('#'+id).prop('checked', false);
      }
      this.each(function() {
        var canvas = $('<canvas>');
        var canvasID = $(this).attr('id');
        canvas.attr({
          width: 25,
          height: 25
        })
        .addClass(canvasID);
        $(this).after(canvas);
        $('.' + canvasID).on('click', function() {
          if($('#'+canvasID).is(':checked')){
            uncheckCheckbox(canvasID);
          } else {
            checkCheckbox(canvasID);
          }
        });
      });
    };

}(jQuery));
