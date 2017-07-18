/*$(document).ready(function() {
		var tasowanko = function() {
    var parent = $(".row");
    var divs = parent.children();
		console.log(divs.length);
    while (divs.length) {
			        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    /*  var showText = function(){
        console.log("dawaj");
      };
      $(".startGame").on('click', tasowanko);

}});*/
class Card {
	constructor(id, ifClick, hide) {
	this.id = id;
	this.ifClick = ifClick;
	this.hide = hide;
	}
}
class Deck extends Card {
	constructor(set, id) {
		super(set);
		this.set = [set];
		}
 addCard() {
		for(i=0; i<=set.lenght; i++) {
			newDeck.push(id);
			console.log(newDeck[i]);
}}
var divLenght = $(".tile");
console.log(divLenght.length);


function gameStart(){
	var newDeck = new Deck([]);
	var firstCard = new Card(0 , true, true);
	var secondCard = new Card(1 , true, true);
	var thirdCard = new Card(2 , true, true);
	var fourthCard = new Card(3 , true, true);
	
		}
}
gameStart();
