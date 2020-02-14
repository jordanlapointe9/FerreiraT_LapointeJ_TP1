//Animations du nom de la pizzeria en JavaScript
var string = "Bienvenue à la pizzeria LaPointe de Pizza !";
var str = string.split("");
var el = document.getElementById('str');

(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();

(function slideshow(){

    $("#slideshow > div:gt(0)").hide();

    console.log("allo")

    setInterval(function() { 
    $('.slider > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slider');
    },  3000);
    
    setInterval(function() { 
    $('.slider > div:last')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slider');
    },  3000);

})();
