
        var wins = 0;
        var losses = 0;
        var numGuesses = 10;

        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var compupick = alphabet[Math.floor(Math.random() * 27)];
        console.log(compupick)

        function myFunction() {
    var x = document.getElementById("letter").value;
    document.getElementById("field").innerHTML = x;
      if (x===compupick){
          document.getElementById("win").innerHTML = "Congratulations!! You win";
        wins++;
      }
      else {
          document.getElementById("lose").innerHTML = "Nope. Try again.";
        numGuesses--;
      }
      if (numGuesses === 0){
          losses++;
      }
      document.getElementById("wins").innerHTML = "Wins: " + wins;
      document.getElementById("losses").innerHTML = "Losses: " + losses;
      document.getElementById("guesses").innerHTML = "You have " + numGuesses + " left";
        }
       
