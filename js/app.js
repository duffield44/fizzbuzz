$(document).ready(function(){
 for (var i = 1; i < 101; i++) {
   if (i % 15 == 0) {
   	$('.list').append("<p>fizzbuzz</p>");
   }
   else if (i % 5 == 0) {
   	$('.list').append("<p>Buzz</p>");
   }
   else if (i % 3 == 0) {
   	$('.list').append("<p>Fizz</p>");
   }
   else {
   	$('.list').append("<p>" + i + "</p>");
   };
};
});

