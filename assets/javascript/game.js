var words = [
    "fantastic",
    "meow",
    "purr",
    "kitty",
    // not sure why the console won't let it finish the word before announcing that the word was solved.
]

var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}

var remainingLetters = word.length;
alert("You've come across a safe. To unlock it here are three clues!");
alert("1. This person has animals.");
alert("2. It is a cute animal we have seen in class for one of our first projects.");
alert("3. Think... placeholder.");
while (remainingLetters > 0) {
alert(answerArray.join(" "));

var guess = prompt("Guess the word to unlock the safe! Or choose live the safer life by hitting cancel. The choice is yours!");
if (guess === null) {
    break;
}
else if (guess.length !== 1) {
    alert("Please enter a single letter.");
} else {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}
}
alert(answerArray.join(" "));
alert("You did it, the safe has unlocked! The magic word was " + word);
