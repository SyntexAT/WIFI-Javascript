/**************************
  DESCRTIPTION
**************************/
// document.getElementById() wird in die Variable _e eingefügt und kann stattdessen verwendet werden
var _e = function( id ) {
  return document.getElementById(id);
}

/**************************
  DESCRTIPTION
**************************/
var zahlEinlesen = function(text) {
  var zahl;
  text = text.replace(',', '.'); // String replace - Der PUNKT wird durch ein Beistrich ersetzt!
  zahl = text * 1;
  return zahl;
}

/**************************
  DESCRTIPTION
**************************/
var zahlAusgeben = function(zahl) {
  var text;
  zahl = Math.round( zahl * 100 ) / 100; // Zahl wird in 2 Kommastellen umgewandelt
  text = zahl + ''; // oder toString - Zahl wird in einen String umgewandelt
  text = text.replace('.',','); // Der BEISTRICHT wird wieder duch einen PUNKT ersetzt
  return text;
}

/**************************
  Zufallszahl Generator
**************************/
var zufallsZahlGenerator = function(min, max) {
  var zufall, anzahl;
  anzahl = max - min + 1;
  zufall = Math.floor( Math.random() * anzahl) + min;

  return zufall;
}

/**************************
  HTML Element mit id wird eingeblendet
**************************/
var showEl = function(id){
  _e(id).style.display = "block";
}

/**************************
  HTML Element mit id wird ausgeblendet
**************************/
var hideEl = function(id){
  _e(id).style.display = "none";
}
