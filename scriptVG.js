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
  }

  createDeck() {
    const suits = ["Hjärter", "Ruter", "Klöver", "Spader"];
    const names = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Knekt",
      "Dam",
      "Kung",
      "Ess",
    ];

    for (const suit of suits) {
      for (let i = 0; i < names.length; i++) {
        let value = i + 2;
        if (i >= 9) {
          value = 10;
          if (i === 12) value = 11;
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

class Dealer {
  constructor(deck) {
    this.deck = deck;
  }

  shuffleDeck() {
    this.deck.shuffle();
  }

  dealHands(players) {
    for (let i = 0; i < 5; i++) {
      for (const player of players) {
        player.addToHand(this.deck.dealCard());
      }
    }
  }
}

class HandValidator {
  static evaluateHands(players) {
    const results = players.map((player) => ({
      name: player.name,
      hand: player.hand,
      value: player.calculateHandValue(),
    }));
    return results;
  }
}

class Game {
  constructor() {
    this.players = [];
    this.dealer = new Dealer(new Deck());
    this.addPlayers();
  }

  addPlayers() {
    let numOfPlayers = parseInt(prompt("Hur många spelare?"));
    while (numOfPlayers < 2 || numOfPlayers > 5 || isNaN(numOfPlayers)) {
      alert("Det måste vara mellan 2-5 spelare för att kunna spela");
      numOfPlayers = parseInt(prompt("Hur många spelare?"));
    }

    for (let i = 0; i < numOfPlayers; i++) {
      const playerName = prompt(`Skriv in spelare ${i + 1}s namn:`);
      this.players.push(new Player(playerName));
    }
  }

  startGame() {
    this.dealer.shuffleDeck();
    this.players.forEach((player) => (player.hand = []));
    this.dealer.dealHands(this.players);
    const handResults = HandValidator.evaluateHands(this.players);
    handResults.forEach((result) => {
      console.log(
        `${result.name} hand: ${result.hand
          .map((card) => `${card.suit} ${card.name}`)
          .join(", ")}. Handens värde: ${result.value}`
      );
    });
    const winner = handResults.reduce((prev, current) =>
      prev.value > current.value ? prev : current
    );
    console.log(
      `Vinnaren är ${winner.name} och det totala värdet på handen är: ${winner.value}!`
    );
  }
}

// ----------------
// ----------------
//   Spelet körs
// ----------------
// ----------------

const game = new Game();
game.startGame();
