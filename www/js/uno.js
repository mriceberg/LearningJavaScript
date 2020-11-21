const RED = "Red";
const YELLOW = "Yellow";
const BLUE ="Blue";
const GREEN = "Green";
const COLORS = [RED, YELLOW, BLUE, GREEN];

const SKIP = "Skip";
const DRAW_TWO = "Draw Two";
const REVERSE = "Reverse";
const ACTION_CARDS = [SKIP, DRAW_TWO, REVERSE];

const WILD = "Wild";
const WILD_DRAW = "Wild and Draw Four";
const WILD_CARDS = [WILD, WILD_DRAW];

function makeCard(cardColor, cardValue) {
    return { color: cardColor, value: cardValue};
}

function createCards() {
  var cards = [];

  for(var colorIndex = 0; colorIndex < COLORS.length; colorIndex++) {
    var currentColor = COLORS[colorIndex];
    
    cards.push(makeCard(currentColor, "0"));
    
    for (var valueIndex = 1; valueIndex < 10; valueIndex++) {
        for (var cardCopy = 0; cardCopy < 2; cardCopy++) {
            cards.push(makeCard(currentColor, "" + valueIndex));
        }
    }

    for (var valueIndex = 0; valueIndex < ACTION_CARDS.length; valueIndex++) {
        for (var cardCopy = 0; cardCopy < 2; cardCopy++) {
            cards.push(makeCard(currentColor, ACTION_CARDS[valueIndex]));
        }
    }
  }

  for (var valueIndex = 0; valueIndex < WILD_CARDS.length; valueIndex++) {
      for (var cardCopy = 0; cardCopy < 4; cardCopy++) {
          cards.push(makeCard("WILD", WILD_CARDS[valueIndex]));
      }
  }
  return cards;
};

function mixCards(cards) {
    var numberOfCards = cards.length;
    var cardsToDistribute = Array.from(cards);
    var mixedCards = [];

    var cardToPick = 0;
    for (var cardIndex = 0; cardIndex < numberOfCards; cardIndex++) {
        var inc = Math.floor(Math.random() * 123);
        cardToPick = (cardToPick + inc) % cardsToDistribute.length;
        mixedCards.push(cardsToDistribute[cardToPick]);
        cardsToDistribute.splice(cardToPick, 1);
    }

    return mixedCards;
};

function startGame(deck) {
    var player1Cards = [];
    var player2Cards = [];

    for (var cardCount = 0; cardCount < 7; cardCount++) {
        for (var playerCount = 0; playerCount < 2; playerCount++) {
            var card = deck.shift();
            if (playerCount == 0) {
                player1Cards.push(card);
            } else {
                player2Cards.push(card);
            }
        }
    }

    return {
        player1Cards: player1Cards,
        player2Cards: player2Cards,
        currentPlayer: 1,
        lastCardPlayed: deck.shift(),
        deck: deck
    }
};

var cards = createCards();
var deck = mixCards(cards);

var game = startGame(deck);

console.log(game.lastCardPlayed);