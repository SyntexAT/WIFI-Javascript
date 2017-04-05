/* Import jQuery über Javascript */
document.write('<script src="../jquery-3.1.1.min.js"></script>')


var add = function( a, b ){
  a = a.toString().replace(',','.')*1;
  b = b.toString().replace(',','.')*1;

  return a+b;
};

/* René
var createNumbers = function(...numbers){
  var oNumbers = {}
  for(var i in numbers) {
    switch (numbers[i]) {
      case 1: oNumbers.a = numbers[i]; break;
      case 2: oNumbers.b = numbers[i]; break;
      case 3: oNumbers.c = numbers[i]; break;
      case 4: oNumbers.d = numbers[i]; break;
      case 5: oNumbers.e = numbers[i]; break;
      default:
    }
  }
  return oNumbers;
}
*/

/* Alex */
var createNumbers = function(){
/* Möglichkeit 1
  var indexes = 'abcdefghijklm'
  for (var i in arguments) {
    obj[indexes[i]] = arguments[i];
  }
*/
  var obj = {};
  /* BESTE Mögichkeit  !!!! */
  arguments = Array.prototype.sort.call(arguments);
  if( arguments.length == 0 ) { throw "Error: keine Werte"; }
  for (var i in arguments) {
    if( isNaN(arguments[i] ) ) { throw "Error: nicht nummerischer Wert";}
      obj[String.fromCharCode(i*1+97)] = arguments[i];
  }
  return obj;
}

var outputAdd = function(a,b){
  document.getElementById('ausgabe').innerHTML = add(a,b);
}

var zeitVerzoegert = function( callback ) {
  setTimeout(function(){
    callback('OK');
  }, 1000)
}
