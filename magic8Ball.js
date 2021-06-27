// Magic Eight Ball
// Use control flow to predict fortune!
// User inputs a question and program outputs a random fortune.

// State name (optional)
let userName = 'Jane'
userName ?
  console.log(`Hello ${userName}!`):
  console.log(`Hello! What would you like to ask Magic Eight Ball?`);

// Ask question
  const userQuestion = 'I love the cartoon  "Wacky Races"! Who wins in tonight\'s episode?';

//Display name (if given) and question
 console.log(`Magic Eight Ball QUESTION: \n${userQuestion}`);

// Generate random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);

// Variable equal to empty string. Can use value of generated randomNumber 
let eightBall = ' ';
switch (randomNumber) {
   case 0:
      eightBall= 'Dick Dastardly and Muttley in the Mean Machine.';
    break; 
    case 1:
      eightBall= 'Penelope Pitstop in the Compact Pussycat.';
    break; 
    case 2:
      eightBall= 'the Slag Brothers (Rock and Gravel) in the Bouldermobile.';
    break; 
    case 3:
      eightBall= 'the Gruesomes (Big Gruesome and Little Gruesome) in the Creepy Coupe.';
    break; 
    case 4:
      eightBall= 'Prof. Pat Pending in the Convert-a-Car.';
    break; 
    case 5:
      eightBall= 'The Red Max in the Crimson Haybaler.';
    break; 
    case 6:
      eightBall= 'Sgt. Blast and Pvt. Meekley in the Army Surplus Special.';
    break; 
    default:
      eightBall= 'The Anthill Mob in the Bulletproof Bomb.';
    break; 
}

// Display random number
// Display fortune based on random number
console.log(`Magic Eight Ball ANSWER: ${randomNumber}\n${eightBall}`);

// Output (no name)
// Hello! What would you like to ask Magic Eight Ball?
// Magic Eight Ball QUESTION: 
// I love the cartoon  "Wacky Races"! Who wins in tonight's episode?
// Magic Eight Ball ANSWER: 0
// Dick Dastardly and Muttley in the Mean Machine.

// Output (with name)
// Hello Jane!
// Magic Eight Ball QUESTION: 
// I love the cartoon  "Wacky Races"! Who wins in tonight's episode?
// Magic Eight Ball ANSWER: 1
// Penelope Pitstop in the Compact Pussycat.
