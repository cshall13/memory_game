$(document).ready(function(){
	var cards = array = [
	'<img src="default/monsters-01.png">',
	'<img src="default/monsters-02.png">',
	'<img src="default/monsters-03.png">',
	'<img src="default/monsters-04.png">',
	];

	var gridSize = 8;
	var memoryGameHTML = '';
	for(let i = 0; i<gridSize; i++){
		if(i<2){
			card = cards[0];
		}else if(i<4){
			card = cards[1];
		}else if(i<6){
			card = cards[2];
		}else if(i<8){
			card = cards[3];
		}

	
		memoryGameHTML += '<div class="card col-sm-3">';
			memoryGameHTML += '<div class="card-holder">';
				memoryGameHTML += `<div class="card-front">${card}</div>`;
				memoryGameHTML += '<div class="card-back"></div>';
			memoryGameHTML += '</div>';
		memoryGameHTML += '</div>';
	}

		// console.log(memoryGameHTML);
		$('.mg-contents').html(memoryGameHTML);

		$('.card-holder').click(function(){
			$(this).toggleClass('flip');

			// user has flipped a card. if there is another one turned over
			// see if they match. otherwise, do nothing
			// set up an array call cardsUp that contains all the elements 
			// with a class of flip(thats how we know they are facing up)
			var cardsUp = $('.flip')
			if(cardsUp.length == 2){
				// 2 cards have a flip class (face up) or we wouldnt be here
				// check to see if they are the same...
				var card1 = (cardsUp[0].children[0].children[0].src);
				var card2 = (cardsUp[1].children[0].children[0].src);
				if(card1 == card2){
					// they match! i.e. the images are exactly the same
				}else{
					// they are not the same. flinp them back over
					setTimeout(function(){
						cardsUp.removeClass('flip');
					},2000);
					
				}
				// cardsUpImages = cardsUp.find('.card-front img');
			}
		});
	



});







