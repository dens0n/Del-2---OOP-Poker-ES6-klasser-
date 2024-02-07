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

// ----------------
// ----------------
//   Spelet körs
// ----------------
// ----------------

//
// DEL 1
//

const deck = new Deck(); // skapar en ny instans av en kortlek
console.log("Oblandad kortlek:", [...deck.cards]); // skriver ut en oblandad kortlek

deck.shuffle(); // blandar kortleken
console.log("\nBlandad kortlek:", deck.cards); // Skriver ut den blandade kortleken

//
// DEL 2
//

const player1 = new Player("Slim"); // skapar en ny instans av en player med namnet Slim
const player2 = new Player("Luke"); // skapar en ny instans av en player med namnet Luke

// Dela ut 5 kort till varje spelare (varannat kort)
for (let i = 0; i < 5; i++) {
  player1.addToHand(deck.dealCard());
  player2.addToHand(deck.dealCard());
}

console.log("\nKortleken efter att korten delats ut", deck.cards); // skriver ut kortleken efter att korten delats ut

console.log(
  "\nLukes hand:",
  player1.hand,
  "\nTotala värde:",
  player1.calculateHandValue()
); // skriver ut spelaren hand + totala värde

console.log(
  "\nlims hand:",
  player2.hand,
  "\nTotala värde:",
  player2.calculateHandValue()
); // skriver ut spelaren hand + totala värde

//
// Del 3
//

const discardPile = [];
// ittererar genom händerna 2 gånger
for (let i = 0; i < 2; i++) {
  discardPile.push(player1.hand.pop()); //tar bort 1 kort från spelaren hand och lägger till i kasthögen "discardPile"
  discardPile.push(player2.hand.pop()); //tar bort 1 kort från spelaren hand och lägger till i kasthögen "discardPile"
}
console.log("\nSpelarna slänger 2 kort var i en kasthög:", discardPile); // skriver ut kasthögen

console.log("\nSpelarna drar 2 nya kort var ur kortleken");
for (let i = 0; i < 2; i++) {
  player1.addToHand(deck.dealCard());
  player2.addToHand(deck.dealCard());
}
console.log("\nKortlek efter utdelning:", deck.cards);
console.log(
  "\nLukes nya hand:",
  player1.hand,
  "\nNya totala värde:",
  player1.calculateHandValue()
); // skriver ut spelaren nya hand + totala värde
console.log(
  "\nlims nya hand:",
  player2.hand,
  "\nNya totala värde:",
  player2.calculateHandValue()
); // skriver ut spelaren nya hand + totala värde

//
// Del 4
//

while (player1.hand.length > 0) {
  discardPile.push(player1.hand.pop()); // flyttar korten från spelarens hand till kasthögen
}
while (player2.hand.length > 0) {
  discardPile.push(player2.hand.pop()); // flyttar korten från spelarens hand till kasthögen
}

console.log("\nSpelarna kastar alla sina kort i kasthögen:", discardPile);

deck.cards.push(...discardPile); // flyttar kasthögen till kortleken
discardPile.length = 0; // sätter värdet på kasthögen till 0 (tom)

console.log("\nKortleken efter att korten lämnats tillbaka:", deck.cards); // skriver ut hela kortleken efter att korten lämnats tillbaka

deck.shuffle(); // blandar kortleken
console.log("\nNy blandad kortlek:", deck.cards); //skriver ut den nya blandade kortleken
