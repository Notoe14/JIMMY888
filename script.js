function setStyles(selector, styles) {
    var elements = document.getElementsByClassName(selector);
    for (var i = 0; i < elements.length; i++) {
      Object.assign(elements[i].style, styles);
    }
  }
  
  function setProperty(selector, styles) {
    var elements = document.getElementsByClassName(selector);
    for (var i = 0; i < elements.length; i++) {
      var style = elements[i].style;
      for (var property in styles) {
        style.setProperty(property, styles[property]);
      }
    }
  }
  
  function setInnerHTML(selector, innerHTML) {
    var elements = document.getElementsByClassName(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = innerHTML;
    }
  }
  
  function setImage(selector, src) {
    var elements = document.getElementsByClassName(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].src = src;
    }
  }
document.getElementsByClassName("KUY")[0].addEventListener("click", function() {
    console.log("AOM KUY");
    if(userCredits>0){
    random();
    var phase1 = document.getElementById("1");
    phase1.innerHTML = `<img src="./slot/${random1}" height="400">`;
    var phase2 = document.getElementById("2");
    phase2.innerHTML = `<img src="./slot/${random2}" height="400">`;
    var phase3 = document.getElementById("3");
    phase3.innerHTML = `<img src="./slot/${random3}" height="400">`;
    cum();
    }
});

var array = ["1.jpg", "2.jpg", "3.png", "4.png", "5.png", "7.png", "8.jpg", "9.jpg"];
let random1;
let random2;
let random3;

function random() {
    // Use Math.random() and Math.floor() correctly to get a random index
    random1 = array[Math.floor(Math.random() * array.length)];
    random2 = array[Math.floor(Math.random() * array.length)];
    random3 = array[Math.floor(Math.random() * array.length)];
}
function cum(){
    if(random1===random2 && random2===random3){
        setStyles("flex2", {visibility:"visible"})
        console.log ("cumming")
        var incum = document.getElementById("noti");
        incum.classList.remove('hidden');
        incum.innerHTML = `<img src="./slot/Red and Yellow Minimalist Casino Night Instagram Post.png" alt="" id="messageDisplay" class="message">`;
        setTimeout(function(){
            incum.classList.add('hidden');
            setStyles("flex2", {visibility:"hidden"})
            document.getElementById('messageDisplay').innerHTML = "";
        }, 3000);
        updateCredits(1000);
    }
    else if(random1===random2 || random2===random3){
      setStyles("flex2", {visibility:"visible"})
      console.log ("cumming")
      var incum = document.getElementById("noti");
      incum.classList.remove('hidden');
      incum.innerHTML = `<img src="./slot/Green and Gold Modern Casino Night Flyer.png" alt="" id="messageDisplay" class="message">`;
      setTimeout(function(){
          incum.classList.add('hidden');
          setStyles("flex2", {visibility:"hidden"})
          document.getElementById('messageDisplay').innerHTML = "";
      }, 3000);
      updateCredits(100);
  }
}
let userCredits = 100;
const costToPlay = 10;
function resetCredits() {
  userCredits = 0;
  document.getElementById('creditDisplay').innerText = `Credits: ${userCredits}`;
}
function updateCredits(amount) {
  userCredits += amount;
  document.getElementById('creditDisplay').innerText = `Credits: ${userCredits}`;
}
function playGame() {
  if (userCredits >= costToPlay) {
      updateCredits(-costToPlay); // Deduct credits for playing
      const win = Math.random() < 0.5; // 50% win chance
      if (win) {
          updateCredits(20); // Win 20 credits
          alert("You won!");
      } else {
          alert("You lost. Try again!");
      }
  } else {
      alert("Not enough credits to play!");
  }
}
function addCredits(amount) {
  updateCredits(amount);
}
function decreaseCredits(amount) {
  if(userCredits>=costToPlay){
  updateCredits(-amount); // Decrease credits by the specified amount
}
}
