// http://wifi.1av.at/516/alex/showimage.php?id=x (x = 1-5)

var Preloader = function( imgs ) {
  var elements = [];
  this.addItems = function(imgs){
    console.log(imgs);
  }
}

var bilderArray = [
  'http://wifi.1av.at/516/alex/showimage.php?id=1',
  'http://wifi.1av.at/516/alex/showimage.php?id=2',
  'http://wifi.1av.at/516/alex/showimage.php?id=3',
  'http://wifi.1av.at/516/alex/showimage.php?id=4',
  'http://wifi.1av.at/516/alex/showimage.php?id=5',
];

var preloader = new Preloader()
