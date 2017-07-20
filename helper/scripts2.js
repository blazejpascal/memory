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
			function () {
				var arr = [black, red, green, purple, pink, orange, gold, silver];
				for (i = 0; i <= arr.length; i++) {
					this.color = arr[i];
				}

}});
var cardsSelected = 0;
var pairs = 0;

		var cardHandler = function (event){
					if (cardsSelected >= 2) {
									$(".tile").css("background-color", "orange");
									cardsSelected = 0;
								}
			    	$(event.target).css("background-color", "red");
			    	cardsSelected += 1;
							if (cardsSelected >=2) {}
			    };
	    $(".tile").on("click", cardHandler);
*/



class Card {
	constructor(id,color, ifClick, hide) {
	this.id = id;
	this.ifClick = ifClick;
	this.hide = hide;
	this.color= color;
	}
}

class Deck {
	constructor(set) {
		this.set = [set];
		}
}
var divLength = $(".tile");
console.log(divLength.length);



function gameStart(){ //Creating 16 new card with id colors from array.
	var newDeck = new Deck();
	var colors = ["black", "red", "green", "purple", "pink", "orange", "gold", "silver", "black", "red", "green", "purple", "pink", "orange", "gold", "silver"];
	for(var i = 0; i<16; i++) {
		newDeck.set[i] = new Card(i,colors[i], true, true);
				//newDeck.set.push(new Card(i));
	}
	console.log(newDeck.set);
	console.log(newDeck.set.length);

		function mixArray() { //Shuffling deck array.
			var arr = newDeck.set;
				for (var i=0; i<arr.length; i++) {
				var j = Math.floor(Math.random() * arr.length);
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;

		}
		console.log(arr);
		return arr;
		}
		mixArray();

			var addId = function addIdCard() { // shuld add js to html objects
				var arr = newDeck.set;
					for(var i = 0; i<arr.length;i++);
					var newColor = arr[i].color;//TODO
					console.log(arr[i].color)
					//$("#ii").css ("background-color", "newDeck.set[i].color");
					//$("#4").css ("background-color", "red");
					$("#4").css ("background-color", "newColor");
					//$(event.target).css("background-color", "red");
					console.log("working")
					//console.log(arr.length, newDeck.set.length, arr[3].color, newDeck.set[3].color);
			}
			$(".tile").on("click", addId);
}
gameStart();
