class Card {
    constructor(suit, name, value) {
      this.suit = suit;
      this.name = name;
      this.value = value;
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }
  
    addToHand(card) {
      this.hand.push(card);
    }
  
    calculateHandValue() {
      return this.hand.reduce((total, card) => total + card.value, 0);
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      this.createDeck();
      this.shuffle();
    }
  
    createDeck() {
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
      
      for (const suit of suits) {
        for (let i = 0; i < names.length; i++) {
          let value = i + 2;
          if (i >= 9) { // For Jack, Queen, King, Ace
            value = 10;
            if (i === 12) value = 11; // Ace value
          }
          this.cards.push(new Card(suit, names[i], value));
        }
      }
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    dealCard() {
      return this.cards.pop();
    }
  }
  
  // Skapa en kortlek och två spelare
  const deck = new Deck();
  const player1 = new Player("Slim");
  const player2 = new Player("Luke");
  
  // Dela ut 5 kort till varje spelare
  for (let i = 0; i < 5; i++) {
    player1.addToHand(deck.dealCard());
    player2.addToHand(deck.dealCard());
  }
  
  // Skriv ut kortleken efter att korten har delats ut
  console.log("Deck after dealing cards:");
  console.log(deck.cards);
  
  // Skriv ut spelarna och deras händer
  console.log("\nPlayers and their hands:");
  console.log(`${player1.name}'s hand:`, player1.hand);
  console.log(`${player2.name}'s hand:`, player2.hand);
  
  // Skriv ut den sammanlagda numeriska värdet för varje spelares hand
  console.log(`\nTotal value of ${player1.name}'s hand:`, player1.calculateHandValue());
  console.log(`Total value of ${player2.name}'s hand:`, player2.calculateHandValue());
  