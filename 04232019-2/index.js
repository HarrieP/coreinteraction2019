$(document).ready(function(){

var doc = $(document);


var width = doc.width() - 1;
var height = doc.height() - 1;


var shapes = [ $(".triangle") ]




function randomStuff(){
var randomShape = shapes[ Math.floor(Math.random() * shapes.length) ]
var clone = randomShape.clone().appendTo('body');

clone.last().css('left', Math.random() * width)
clone.last().css('top', Math.random() * height)
}


//setInterval is to call something everysecond?
setInterval(function(){ 
randomStuff()

},0.2)

})