var name1='Anna',var name2='Josef',var name3='Tanja';

var alleNamen = new Array('Anna','Josef','Tanja');

console.log(alleNamen[0]); // Array beginnen immer mit 0

alleNamen[3] = 'Barbara'; // Zuweisung vom Platz 4 im Array mit einem Wert

alleNamen[7] = 'Andreas'; // Zuweisung vom PLatz 8 im Array mit einem Wert

alert(alleNamen); // Ausgabe des Arrays

console.log( alleNamen.length ); // Anzahl der Elemente

letzterArrayPlatz = alleNamen.length-1;// letzter Platz vom Array
console.log( alleNamen[letzterArrayPlatz] ); // letzter Platz vom Array

// Wert an Array anhängen
alleNamen[ letzterArrayPlatz +1 ] = 'Oliver';
alleNamen[ alleNamen.length ] = 'Milat';
alleNamen.push( 'Shen' );

console.log(alleNamen);

// Aus Array löschen
delete alleNamen[0];
alleNamen[0] = 1; // Array ist der Typ egal

alleNamen[4] = new Array('Alex', 'Vincenz'); // Mehrdimensionaler Array

console.log(alleNamen[4][0]);

var trainer = alleNamen[4];
console.log( trainer[0], alleNamen[4][0] );


alleNamen[5] = new Array();
alleNamen[5]['vorname'] = 'René';
alleNamen[5]['nachname'] = 'Krieger';
alleNamen[5][0] = 1;

// alleNamen.length == 1 -- Es werden nur Int Bezeichnungen gezählt

var teilnehmer = []; // Array Literal // Kurzbezeichnung eines Arrays
