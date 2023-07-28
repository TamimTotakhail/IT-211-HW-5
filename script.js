// Card object constructor
function Card(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  
  // Array of possible card values
  const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  
  // Array of possible card suits
  const cardSuits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
  
  // Create an array to hold all the cards in the deck
  const deck = [];
  
  // Populate the deck with all 52 cards
  for (const value of cardValues) {
    for (const suit of cardSuits) {
      deck.push(new Card(value, suit));
    }
  }
  
  // Function to convert card object to a readable string representation
  function cardToString(card) {
    return card.value === '10' ? `${card.value} of ${card.suit}` : `${card.value[0]} of ${card.suit}`;
  }
  
  // Function to randomly select 5 cards from the deck
  function drawHand() {
    const hand = [];
  
    while (hand.length < 5) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const card = deck[randomIndex];
  
      if (!hand.includes(card)) {
        hand.push(card);
      }
    }
  
    return hand;
  }
  
  // Function to deal a hand and display it on the HTML page
  function dealHand() {
    const hand = drawHand();
  
    // Clear the previously displayed hand
    const handContainer = document.getElementById('handContainer');
    const handElement = document.getElementById('hand');
    handElement.innerHTML = '';
  
    // Display the current hand
    for (const card of hand) {
      const cardText = document.createTextNode(cardToString(card));
      const cardElement = document.createElement('p');
      cardElement.appendChild(cardText);
      handElement.appendChild(cardElement);
    }
  }
  
  // On page load, deal the initial hand
  dealHand();
  
