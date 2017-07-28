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
function gameStart(){ //Creating 16 new card with id colors from array.
	var newDeck = new Deck();
	var colors = ["black", "red", "green", "purple", "pink", "brown", "blue", "silver",
	 "black", "red", "green", "purple", "pink", "brown", "blue", "silver"];
	for(var i = 0; i<16; i++) {
		newDeck.set[i] = new Card(i,colors[i], false, true);
				//newDeck.set.push(new Card(i));
	}
		function mixArray() { //Shuffling deck array.
			var arr = newDeck.set;
			for (var i=0; i<arr.length; i++) {
				var j = Math.floor(Math.random() * arr.length);
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				}
		return arr;
		}
		mixArray();
		var addId = function addIdCard() { //  add js to html objects
		for (var i = 0; i<16; i++) {
			var div = document.getElementById(i);
			}
		}
			addId();
			$(".startGame").on("click", function(){location.reload()}); //TODO dlaczego jak dodam nawiasy do addId to zmienia dzialanie funkcji

			var cardsSelected = 0;
			var pairs = 0;
			selectedCardId = null;
			previousCardId = null;
		 function hideCard(){
			 console.log(cardsSelected);
			 if(cardsSelected == 0) {
			 	if (previousCardId) {
			 	 $("#" + selectedCardId).css('backgroundColor','orange')
			 	 $("#" + previousCardId).css('backgroundColor','orange')
			 	 }
			 }
			 if (selectedCardId) {
			 previousCardId = selectedCardId;
			 }
			 selectedCardId = $(event.target).attr("id"); // id of selected card
			 console.log("selected: " + selectedCardId);
			 if (!cardsSelected) {
			 	selectedCardColor1 = newDeck.set[selectedCardId].color; //color of seleted card
				}
			 else {
				selectedCardColor2 = newDeck.set[selectedCardId].color;
			 }
			 var div = document.getElementById(selectedCardId);
			 div.style.backgroundColor = newDeck.set[selectedCardId].color;

			if(cardsSelected == 0) {
				cardsSelected += 1;
							}
					else {
						//console.log("if2 working");
						cardsSelected = 0;
						compareCards();
					}
				}
					function compareCards(){
						var mistakes = mistakes;
						if (selectedCardColor1 == selectedCardColor2) {
							$("#" + selectedCardId).css('visibility','hidden')
							$("#" + previousCardId).css('visibility','hidden')
							var out = pairs += 1;
							document.getElementsByName('output')[0].value= out;
							console.log(pairs);
								if (out == 8) {alert("Game over")}
							}
								if (selectedCardId == previousCardId) {
							console.log("else if workig")
							$("#" + selectedCardId).css('visibility','visible')
							pairs -=1;
						}
						else {
							mistakes += 1;
							document.getElementsByName('output1')[0].value= out;
						}
					}
	$(".tile").on("click", hideCard);
}

gameStart();
