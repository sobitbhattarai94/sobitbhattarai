
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


var barC = document.querySelector("#bar-container")
var fixedImage = document.querySelector("#fixed-image")
barC.addEventListener("mouseenter", function(){
    fixedImage.style.display = "block"
})
barC.addEventListener("mouseleave",  function(){
    fixedImage.style.display = "none"
})

var bars = document.querySelectorAll(".bar")
bars.forEach(function(b){
    b.addEventListener("mouseenter", function(){
        var image = b.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`
    })
});