QUnit.test('mein erster Test', function(assert){
  assert.ok( 1 == '1', 'automatische Typumwandlung' );
  assert.ok( 1 !== '1', 'nicht exakt gleich' );
});

QUnit.test('Rechenfunktionen', function(assert){
  assert.equal( add(1,2), 3, 'Funktion Addieren');
  assert.equal( add('1','2'), 3, 'Addieren mit automatischer Typumwandlung');
  assert.ok( isNaN(add('a',1)), 'Addieren mit nicht nummerischen Werten');
  assert.equal( add(-1,2), 1, 'Addieren mit negativen Werten');
  assert.equal( add('1,5',1), 2.5, 'Addieren mit Kommazahlen');
});

QUnit.test('Objekttest', function(assert){
  assert.notEqual( createNumbers(1,2,3), {a:1,b:2,c:3}, 'Zahlenobjekt (notEqual)');
  assert.deepEqual( createNumbers(1,2,3), {a:1,b:2,c:3}, 'Zahlenobjekt (deepEqual)');
  assert.deepEqual( createNumbers(1,2), {a:1,b:2}, 'Zahlenobjekt 2 Werte');
  assert.deepEqual( createNumbers(1,2,3,4,5), {a:1,b:2,c:3,d:4,e:5}, 'Zahlenobjekt viele Werte');
  assert.deepEqual( createNumbers(5,3,2,1,4), {a:1,b:2,c:3,d:4,e:5}, 'Zahlenobjekt viele Werte - Zusatz');

  //assert.deepEqual(createNumbers(),{},'leeres Objekt');
  assert.throws( function(){ createNumbers(); }, /Error/, 'keine Werte');
  assert.throws( function(){ createNumbers(1,2,'a',4); }, /Error/, 'nichtnummerische Werte');
});

QUnit.test('Framework Integration', function(assert){
  assert.ok( typeof $ !== 'undefined', 'jQuery($) Integriert');
})

QUnit.test('asynchrones Script', function(assert){
  var done = assert.async();
  zeitVerzoegert( function(response){
    assert.equal( response, 'OK', 'asynchroner Callback funktioniert');
    done();
  })
});

QUnit.module('Setup HTML', {
  before: function(){
    $('<div id="ausgabe">').appendTo('#qunit-fixture');
  },
  after: function(){
    $('#ausgabe').remove();
  }
})

QUnit.test('Addieren mit Ausgabe',function(assert){
  outputAdd(1,2);
  assert.equal( $('#ausgabe').html(), '3', 'Ausgabe Ergebnis Addieren');
});
