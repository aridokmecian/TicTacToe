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
  console.log(getFileName(this.src));
  if (turn == 1 && getFileName(this.src) == "blankScreen.png") {
    this.src = "x.png";
    turn--;
    count++;
  }
  else if (turn == 0 && getFileName(this.src) == "blankScreen.png"){
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

function getFileName(pathfilename){

  var filenameextension = pathfilename.replace(/^.*[\\\/]/, '');
  var filename = filenameextension.substring(0, filenameextension.lastIndexOf('.'));
  var ext = filenameextension.split('.').pop();

  return filename + "." + ext;

}

function test() {
  if (getFileName($("1").src) == getFileName($("2").src) && getFileName($("1").src) == getFileName($("3").src) && getFileName($("1").src) != "blankScreen.png") {
    alert("Game! press OK to Reset");
    clear();
  }
  else if (getFileName($("1").src) == getFileName($("5").src) && getFileName($("1").src) == getFileName($("9").src)  && getFileName($("1").src) != "blankScreen.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if (getFileName($("1").src) == getFileName($("4").src) && getFileName($("1").src) == getFileName($("7").src)  && getFileName($("1").src) != "blankScreen.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if (getFileName($("2").src) == getFileName($("5").src) && getFileName($("2").src) == getFileName($("8").src)  && getFileName($("2").src) != "blankScreen.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if (getFileName($("3").src) == getFileName($("5").src) && getFileName($("3").src) == getFileName($("7").src)  && getFileName($("3").src) != "blankScreen.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if (getFileName($("3").src) == getFileName($("6").src) && getFileName($("3").src) == getFileName($("9").src)  && getFileName($("3").src) != "blankScreen.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if (getFileName($("7").src) == getFileName($("8").src) && getFileName($("7").src) == getFileName($("9").src)  && getFileName($("7").src) != "blankScreen.png") {
    alert("Game! press OK to Reset");
    clear();
  }

  else if (getFileName($("4").src) == getFileName($("5").src) && getFileName($("4").src) == getFileName($("6").src)  && getFileName($("4").src) != "blankScreen.png") {
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
  for(var i = 1; i < 10; i++){
    console.log("" + i);
    ($(i.toString()).src) = "blankScreen.png";
  }
}
