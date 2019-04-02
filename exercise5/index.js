//check if document is ready
$(document).ready(function(){

var circleWidth = $("#circle").width();
var width = $(document).width() - circleWidth;
var height = $(document).height() - circleWidth;

var colors =["red","orange","yellow","green","blue","purple"]
var texts = ["hey bitches!", "hey sluts!", "hey hoes!", "hey whores!", "hey tramps!"]


setInterval(function(){

var randomWidth = Math.random() * width;
var randomHeight = Math.random() * height;
var randomColor = Math.floor( Math.random()* colors.length);
var randomWidthCircle = Math.random() * width;
var randomHeightCircle = Math.random() * width;
console.log(randomColor)

var leftCss = Math.floor(randomWidth) + "px";
var topCss = Math.floor(randomHeight) + "px";

var randomWidth1 = Math.random() * width;
var randomHeight1 = Math.random() * height;

var leftCss1 = Math.floor(randomWidth1) + "px";
var topCss1 = Math.floor(randomHeight1) + "px";
var heightCss1 = Math.floor(randomHeightCircle) + "px";

var randomWidth2 = Math.random() * width;
var randomHeight2 = Math.random() * height;

var leftCss2 = Math.floor(randomWidth2) + "px";
var topCss2 = Math.floor(randomHeight2) + "px";
var heightCss2 = Math.floor(randomHeightCircle) + "px";

var randomWidth3 = Math.random() * width;
var randomHeight3 = Math.random() * height;

var leftCss3 = Math.floor(randomWidth3) + "px";
var topCss3 = Math.floor(randomHeight3) + "px";
var heightCss3 = Math.floor(randomHeightCircle) + "px";

var randomWidth4 = Math.random() * width;
var randomHeight4 = Math.random() * height;

var leftCss4 = Math.floor(randomWidth4) + "px";
var topCss4 = Math.floor(randomHeight4) + "px";

$("#circle").css("top",topCss)
$("#circle").css("left",leftCss)
$("#circle").css("background-color",colors[randomColor])


$("#circle1").css("top",topCss1)
$("#circle1").css("left",leftCss1)
$("#circle1").css("background-color",colors[randomColor])
$("#circle1").css("height",heightCss1)

$("#circle2").css("top",topCss2)
$("#circle2").css("left",leftCss2)
$("#circle2").css("background-color",colors[randomColor])
$("#circle2").css("height",heightCss2)

$("#circle3").css("top",topCss3)
$("#circle3").css("left",leftCss3)
$("#circle3").css("background-color",colors[randomColor])
$("#circle3").css("height",heightCss3)

$("#circle4").css("top",topCss4)
$("#circle4").css("left",leftCss4)
$("#circle4").css("background-color",colors[randomColor])


},1000)


//end document ready function
})