// random value generated
  var y = Math.floor(Math.random() * 10 + 1); 
// counting the number of guesses
var guess = 1
// made for correct Guess
 function submit(){
  if(x == y)
  {
    alert("CONGRATULATIONS!!!"+playername+"YOU GUESSED IT RIGHT IN"+ guess+"GUESS");
    guess=1
  }
  else if(x > y)
  {
    guess++;
    alert("Oops! Try a smaller number")
  }
  else
  {
    guess++;
    alert("Oops! Try a greater number")
  }
 }
  
// function for number guessed by user     
var x = document.getElementById("guessField").value; 
function playAgain()
{
  y= Math.floor(Math.random()*10+1);
}