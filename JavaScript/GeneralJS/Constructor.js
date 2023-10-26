class Player {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.health = 100; // Default health value
      this.attack = 10; // Default attack value
      this.defense = 5; // Default defense value
    }
  
    attackEnemy(enemy) {
      console.log(`${this.name} attacks ${enemy} for ${this.attack} damage.`);
    }
  }
  
  // Create a player character
  const playerCharacter = new Player("Alice", "Wizard");
  
  // Access and use properties and methods
  console.log(playerCharacter.name); // "Alice"
  console.log(playerCharacter.type); // "Wizard"
  playerCharacter.attackEnemy("Dragon"); // Simulate an attack on a "Dragon"