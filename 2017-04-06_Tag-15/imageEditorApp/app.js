$( 'body' ).on( 'dragenter dragleave dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
});

var images = [];

var flipImageH = function( canvas ) {
  var ctx = canvas.get(0).getContext( '2d' );
  ctx.translate(canvas.get(0).width,0);
  ctx.scale(-1,1);
  ctx.drawImage( canvas.get(0), 0,0 );
  ctx.scale(-1,1);
  ctx.translate(-canvas.get(0).width,0);
}
var flipImageV = function( canvas ) {
  var ctx = canvas.get(0).getContext( '2d' );
  ctx.translate(0,canvas.get(0).height);
  ctx.scale(1,-1);
  ctx.drawImage( canvas.get(0), 0,0 );
  ctx.scale(1,-1);
  ctx.translate(0,-canvas.get(0).height);
}

$( '.icon-undo2' ).on( 'click', function() {
  flipImageH( $( '.dialogselected canvas') )
})
$( '.icon-sad' ).on( 'click', function() {
  flipImageV( $( '.dialogselected canvas') )
})

$('.icon-baffled').on('click', function(){
  Caman(".dialogselected canvas", function () {
    this.revert();
    this.lomo().render();
  });
});

$('.icon-zoom-out').on('click', function(){
  Caman(".dialogselected canvas", function () {
    this.revert();
  });
});



var writeFile = function(entry,data,callback) {
  entry.createWriter(function( writer ){
    writer.onwriteend = callback;
    writer.truncate( data.size );
    waitForIO( writer, function() {
      writer.seek(0);
      writer.write(data);
    });
  });
}

var waitForIO = function( writer, callback ) {
    var start = Date.now();
   // wait for a few seconds
   var reentrant = function() {

     console.log( writer.readyState );

     if (writer.readyState===writer.WRITING && Date.now()-start<4000) {
       setTimeout(reentrant, 100);
       return;
     }
     if (writer.readyState===writer.WRITING) {
       console.error("Write operation taking too long, aborting!"+
         " (current writer readyState is "+writer.readyState+")");
       writer.abort();
     } else {
       callback();
     }
   };
   setTimeout(reentrant, 100);
}

var dataURLtoBlob = function(dataURL) {
    var byteString = atob(dataURL.split(',')[1]);
    var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ab], { "type": mimeString });
    return blob;
}

$( '.icon-floppy-disk' ).on( 'click', function() {
  var canvasToSave = $('.dialogselected canvas');

  var blob = dataURLtoBlob(canvasToSave.get(0).toDataURL()); // base64
  console.log( blob );
  chrome.fileSystem.chooseEntry({type:'saveFile', suggestedName:'superbild.png'},function( writableEntry ){
    writeFile(writableEntry,blob,function() { console.log( 'File gespeichert.'); });
  });


})


$( 'body' ).on( 'drop', function(e) {
  e.preventDefault();
  e.stopPropagation();

  var items = e.originalEvent.dataTransfer;

  for ( var i=0; i<items.items.length; i++ ) {
    var item = items.items[i];
    if ( item.kind == 'file' && item.type.match('image/*') && item.webkitGetAsEntry() ) {
      var meinFileEntry = item.webkitGetAsEntry();
      break;
    }
  }
  meinFileEntry.file( function(file) {
    var url = URL.createObjectURL( file );
    var img = new Image();
    img.src = url;
    img.onload = function() {
      chrome.fileSystem.getDisplayPath(meinFileEntry, function(filepath) {
        var canvas = $( '<canvas>' ).attr({width:img.width, height:img.height});

        images.push(canvas);

        $( '<div title="'+filepath+'">' )
          .appendTo( '#edit')
          .append( canvas )
          .dialog({
            width:'auto',
            height:'auto',
            appendTo: "#edit",
            drag: function( event, ui ) {
              if ( ui.position.left < 1 ) {
                ui.position.left = 1;
              };
            },
            focus: function( event,ui ) {
              $( '.dialogselected' ).removeClass( 'dialogselected' );
              $(this).addClass( 'dialogselected' );
            }
         })

         var ctx = canvas.get(0).getContext( '2d' );
         ctx.drawImage( img, 0,0 );

      });
    }

    //$( '<img>' ).appendTo( 'body' ).attr( 'src', img.src );

    //$( 'body' ).css( {background:'url('+url+')'});

  });

});
