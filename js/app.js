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

var consolePrinter = new Printer('list');
var cprint = consolePrinter.printLine;

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

fizzbuzz(15);

});

