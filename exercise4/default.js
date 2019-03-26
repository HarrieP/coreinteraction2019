var timer,
 i = 0,
 divide = 100;


function start(){

 timer = self.setInterval('increment()', (1000 / divide));
}

function increment(){

 i++;
 document.getElementById('time_out').innerHTML = (i / divide);
}

function stop(){

 clearInterval(timer);
 timer = null;
}

function reset(){
 stop();
 i = 0
 document.getElementById('time_out').innerHTML = (i / divide);
}