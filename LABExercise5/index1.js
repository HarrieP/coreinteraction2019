$(document).ready(function(){

var cols = document.querySelectorAll('#cols .btn'); 
 
[].forEach.call(cols,function(col){
    col.addEventListener("click",click,false);
});
 
function click(e){
    window.alert(this.innerHTML);
}

})
