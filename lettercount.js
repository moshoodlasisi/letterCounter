function countLetter() {
    var text = document.getElementById("text").value;
    var letter = document.getElementById("letter").value;
    var letterCount = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] === letter) {
        letterCount++;
      }
    }
    document.getElementById("output").innerHTML = "The letter " + letter + " appears " + letterCount + " times in the text.";
  }