var cardsSelected = 0;
var pairs = 0;
$(document).ready(function() {
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
});
