/* Goobal variables */
var start = document.getElementById("start");
var score = document.getElementById("scores");
var count = document.getElementById("count");
var man = document.getElementById("man");
var cI = document.getElementById("cI");
var plr = document.getElementById("plr");
var bgMusic = document.getElementById("bm");
// Starting the game 
start.addEventListener("click", function(){
var obs = document.createElement("marquee");
var garbage = ["🦁","🥫","🔪","🎁","🔥","🪓"];

  // Creating marquee
for(var i = 0; i < 20; i++){
  var node = document.createElement("font");
  var textnode = document.createTextNode(garbage[Math.floor(Math.random()*garbage.length)]);
   obs.id = 'obstacles';
   playArea.appendChild(obs);
   node.appendChild(textnode);
   obs.appendChild(node);
   
    // Styling marquee and other elements 
    node.style = `
      color: blue;
      font-size: 25pt;
      text-shadow: -2px 2px 1px black;
      margin-right: ${Math.floor(Math.random()*210)}px;
    `
    start.style.opacity = "0";
    score.style.display = "flex";
    cI.style.marginTop = "200%";
    cI.style.position = "absolute";
// Score js 
document.querySelectorAll('.number-animate').forEach( (el) => {
  const endValue = el.getAttribute('data-end-value');
  const incrementValue = el.getAttribute('data-increment');
  const durationValue = el.getAttribute('data-duration');
  if (endValue) numberAnimation(el, endValue, incrementValue, durationValue);
});
function numberAnimation(el, endValue, incrementor, duration) {
  anime({
    targets: el,
    textContent: endValue,
    round: incrementor ? 1/incrementor : 1/5,
    easing: 'easeInOutQuad',
    duration: duration ? duration : 4000,
  });
}};
    bgMusic.play();
    console.log("///Game Started");
    console.log("///Background Music loaded");
    console.log("///Running all functions");
    console.log("///Clearing Console");
    console.clear();
});
// Jump function 
	// Jump 
  
	window.addEventListener("load", function(){
    man.style.marginTop = "30vh";
    man.style.transition = "ease-out 1s";
          console.clear();
// Return to starting point 
setTimeout(function(){
  if(man.style.marginTop <= "60vh"){
        man.style.marginTop = "53vh";
    man.style.marginLeft = "2vw";
          plr.setAttribute('src','Man.webp');
              console.clear();
  };},1000);

  })





	window.addEventListener("click", function(){
	    man.style.marginTop = "30vh";
	    man.style.transition = "ease-out 1s";
            plr.setAttribute('src','Man2.webp');
        console.log("triggered jump");
            console.clear();
	// Return to starting point 
	setTimeout(function(){
	  if(man.style.marginTop <= "60vh"){
	        man.style.marginTop = "53vh";
	    man.style.marginLeft = "2vw";
            plr.setAttribute('src','Man.webp');
                console.clear();
	  };},1000);
	});
	
/* Under construction 
	 Game over functions 
        "alert("YOUR SCORE : " + count.innerHTML + "\n\n KEEP PLAYING TO BECOME PRO ;p"); */