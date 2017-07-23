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
	var colors = ["black", "red", "green", "purple", "pink", "orange", "gold", "silver",
	 "black", "red", "green", "purple", "pink", "orange", "gold", "silver"];
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

			var addId = function addIdCard() { //  add js to html objects

				for (var i = 0; i<16; i++) {
				var div = document.getElementById(i);
				div.style.backgroundColor = newDeck.set[i].color;
				//console.log(newDeck.set[i].color)
				//console.log(div);
				}
			}
			$(".startGame").on("click", addId); //TODO dlaczego jak dodam nawiasy do addId to zmienia dzialanie funkcji

			var cardsSelected = 0;
			var pairs = 0;
		function hideCard(){

				if(cardsSelected == 0) {
					$( ".tile" ).click(function(event) {
						var a = $(event.target).attr("id");
						var b = newDeck.set[a].color;
								console.log(cardsSelected)
								cardsSelected += 1;
								console.log("if1 working");
								console.log(cardsSelected)
							})
						}
				if(cardsSelected >= 1) {
					$( ".tile" ).click(function(event) {
						var c = $(event.target).attr("id");
						var d = newDeck.set[c].color;
						console.log("if2 working");

		})
		}


				/*//var clickedCardColor = this.color;
				console.log(a);
				console.log(b);
		    /*console.log(newDeck.set[1].color);
		    console.log(newDeck.set[2].color);
				console.log(this.color);
		    $("#i").hide( "slow" );*/

		};
		$(".tile").on("click", hideCard());
}
gameStart();
