turn = 1;
count = 0;
window.onload = function() {
  $("1").observe("click", check);
  $("2").observe("click", check);
  $("3").observe("click", check);
  $("4").observe("click", check);
  $("5").observe("click", check);
  $("6").observe("click", check);
  $("7").observe("click", check);
  $("8").observe("click", check);
  $("9").observe("click", check);
  $("reset").observe("click", clear);
}

function check() {
  if (turn == 1 && this.src =="file:///C:/Users/Ari/Documents/TicTacToe/blank.png") {
    this.src = "x.png";
    turn--;
    count++;
  }
  else if (turn == 0 && this.src =="file:///C:/Users/Ari/Documents/TicTacToe/blank.png"){
    this.src = "o.png";
    turn++;
    count++;
  }
  else {
    alert("You Cannot Choose that spot!");
  }
  setTimeout(test, 100);
    console.log(count);
}

function test() {
  if ($("1").src == $("2").src && $("1").src == $("3").src && $("1").src != "file:///C:/Users/Ari/Documents/TicTacToe/blank.png") {
    alert("Game! press OK to Reset");
    clear();
  }
  else if ($("1").src == $("5").src && $("1").src == $("9").src  && $("1").src != "file:///C:/Users/Ari/Documents/TicTacToe/blank.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if ($("1").src == $("4").src && $("1").src == $("7").src  && $("1").src != "file:///C:/Users/Ari/Documents/TicTacToe/blank.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if ($("2").src == $("5").src && $("2").src == $("8").src  && $("2").src != "file:///C:/Users/Ari/Documents/TicTacToe/blank.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if ($("3").src == $("5").src && $("3").src == $("7").src  && $("3").src != "file:///C:/Users/Ari/Documents/TicTacToe/blank.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if ($("3").src == $("6").src && $("3").src == $("9").src  && $("3").src != "file:///C:/Users/Ari/Documents/TicTacToe/blank.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if ($("7").src == $("8").src && $("7").src == $("9").src  && $("7").src != "file:///C:/Users/Ari/Documents/TicTacToe/blank.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if ($("4").src == $("5").src && $("4").src == $("6").src  && $("4").src != "file:///C:/Users/Ari/Documents/TicTacToe/blank.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if (count == 9) {
    alert("cat game! press OK to Reset");
    count = 0;
    clear();
  }

}


function clear() {
  turn = 1;
  count = 0;
  $("1").src = "blank.png";
  $("2").src = "blank.png";
  $("3").src = "blank.png";
  $("4").src = "blank.png";
  $("5").src = "blank.png";
  $("6").src = "blank.png";
  $("7").src = "blank.png";
  $("8").src = "blank.png";
  $("9").src = "blank.png";
}
