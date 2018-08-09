//event listener
var chicken = document.getElementById('chicken');
var cow = document.getElementById('cow');
var goat = document.getElementById('goat');
var pig = document.getElementById('pig');
var dog = document.getElementById('dog');

//Random number Generator
//random number has to add to top and left
chicken.onclick=function(){
    var x = Math.floor(Math.random()*300);
    var y = Math.floor(Math.random()*300);
    chicken.style.top = x + 'px';
    chicken.style.left = y + 'px';
};

cow.onclick=function(){
    var x = Math.floor(Math.random()*300);
    var y = Math.floor(Math.random()*300);
    cow.style.top = x + 'px';
    cow.style.left = y + 'px';
};

goat.onclick=function(){
    var x = Math.floor(Math.random()*300);
    var y = Math.floor(Math.random()*300);
    goat.style.top = x + 'px';
    goat.style.left = y + 'px';
};

pig.onclick=function(){
    var x = Math.floor(Math.random()*300);
    var y = Math.floor(Math.random()*300);
    pig.style.top = x + 'px';
    pig.style.left = y + 'px';
};
dog.onclick=function(){
    var x = Math.floor(Math.random()*300);
    var y = Math.floor(Math.random()*300);
    dog.style.top = x + 'px';
    dog.style.left = y + 'px';
};
//Animal makes noise , search how to link sound to the animal using a hot link
function play1(){
       var audio = document.getElementById("audio1");
       audio.play();
}
function play2(){
       var audio = document.getElementById("audio2");
       audio.play();
}
function play3(){
       var audio = document.getElementById("audio3");
       audio.play();
}
function play4(){
       var audio = document.getElementById("audio4");
       audio.play();
}
function play5(){
       var audio = document.getElementById("audio5");
       audio.play();
}
