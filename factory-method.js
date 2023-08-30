// The factory method pattern is a creational pattern that uses factory methods to create objects
// A factory method is a method that returns an object
// TIP: The factory method pattern is useful when you need to create objects that are similar but require different parameters
class CardGame {
  static createCardGame(type) {
    if (type === 'poker') return new Poker()
    if (type === 'blackjack') return new Blackjack()

    return null
  }
}

class Poker extends CardGame {
  constructor() {
    super()
    this.name = 'Poker'
    this.players = 2
  }
}

class Blackjack extends CardGame {
  constructor() {
    super()
    this.name = 'Blackjack'
    this.players = 4
  }
}

let poker = CardGame.createCardGame('poker')
let blackjack = CardGame.createCardGame('blackjack')

console.log(poker) // Poker { name: 'Poker', players: 2 }
console.log(blackjack) // Blackjack { name: 'Blackjack', players: 4 }
