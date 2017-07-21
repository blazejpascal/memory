/*function show(name, forname) {
  console.log("witaj " + name + forname);
  return name;
}
 show("Wojciech","Twaróg");
 var result = show("Wojciech","Twaróg");
 console.log(result);

function showText(text) {
  var text = text;
  alert(text);
}
showText("How are you?");


function even(a) {
  var number = a;
  if (a%2 == 0) {
    console.log("liczba parzysta");
  }
  else {
    console.log("liczba nieparzysta");
  }
}
even(2);

function even2(a) {
  (a%2 ==0) ? console.log("liczba parzysta") : console.log("liczba nieparzysta");

}
even(3);


var product = {
	nazwa: 'Jabłko',
	ilosc: 10,
	stan: 'świeże'
};

for(var i in product) {
    console.log(i + ': ' + product[i]);
}


var products = ["Jabłko", "Marchew", "Cytryna"];

products.forEach(function(numerki, zapadka) { TODO nie ma znaczenie nazwa parametru pierwszy to element , id
	console.log(numerki + ': ' + zapadka);
});
*/

function generateArr() { // dlaczego funkcja tworzy a pól undefined?
  var a =  Math.floor(Math.random() * 10);
  var newArr = new Array(a);
  //console.log(newArr.length);

  for (var i=0; i<a; i++) { //TODO dlaczego tu musi byc a a nie newArr.length - niekonczocy sie loop
    var b = Math.floor(Math.random() * 10);
    newArr.push(b);
    //return newArr;  TODO dlaczego nie zwraca
  }
console.log(newArr);
newArr.sort(function(a,b) {return a-b;});
console.log(newArr);


}
generateArr();

/*
for (var i = 0; i<16; i++) {
var div = document.getElementById(i);
div.style.backgroundColor = colors[i];
console.log(div);
}

//var hideCards = function(x,y) {
  $( ".tile" ).click(function() {
    var x = newDeck.set[i].color;
    var y = newDeck.set[j].color;

    console.log(newDeck.set[i].color);
    console.log(newDeck.set[j].color);
    $("#i").hide( "slow" );
});
//};*/
