$(document).ready(function(){
 

function Printer(divId) {
  var lineCount = 1;
  
  this.printLine = function() {
    var m = lineCount + ': ';
    
    for (var i = 0; i < arguments.length; i++) {
      m += arguments[i] + ' ';
    }

    var n = document.createElement("pre"),
        t = document.createTextNode(m);

    n.appendChild(t);
    document.getElementById(divId).appendChild(n);
    
    lineCount++;
  }
}

/* Create a new printer called cprint */
var consolePrinter = new Printer('list');
var cprint = consolePrinter.printLine;

/* Takes input value and prints the number or fizzbuzz */
function fizzbuzz(max) {
  for ( var i = 1; i <= max; i++ ) {
    if (i % 5 == 0 && i % 3 == 0) {
      cprint("FizzBuzz");
    } else if ( i % 3 == 0 ) {
      cprint("Fizz");
    } else if (i % 5 == 0) {
      cprint("Buzz");
    } else {
      cprint(i);
    }
  }
}

/* Allows return key to submit */
  $('input').keydown( function (e) {
    if (e.keyCode == 13) {
      postFizzbuzz();
      $(this).val("");
    }
  })

/* Pressing return key will do the following..... */
function postFizzbuzz() {

  var inputVal = $('input').val();

  /* Change input value to an integer */
  var inputNum = +inputVal;

  /* If the input value is a string, return an alert */
  if (isNaN(inputNum)) {
    alert('Please enter a number, not a word.')
  }

  /* If the input value in a decimal, return an alert */    
  else if (inputNum != Math.floor(inputVal)) {
    alert('Please enter an integer (a non-decimal number).')
  }

  /* For an integer, invoke fizzbuzz */
  else {
    fizzbuzz(inputNum);
  }

}

});

