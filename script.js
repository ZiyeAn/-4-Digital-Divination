
//typewriter
  var i = 0;
  var j = 0;
  var txt1 = 'I know what you want. Listen to your inner voice when choosing a divination tool. ';
  var speed = 80;

  function typeWriter1() {
    if (i < txt1.length) {
      document.getElementById("demo").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter1, speed);
    }
  }

  function typeWriterOnLoad1() {
      setTimeout(typeWriter1, 3500);
    }

  //api
  let checkboxQ1 = document.querySelectorAll('.checkboxQ1'); 
    for (var i = checkboxQ1.length - 1; i >= 0; i--) {
        checkboxQ1[i].addEventListener('change',function(){
            localStorage.setItem("baseLiquor", this.value)
            const baseLiquorChoice=localStorage.getItem("baseLiquor")
            console.log(baseLiquorChoice);
        })
    }

//random coins
    function pickRandom() {
      var coins = [
          { value: "Shake", image: "assets/IMG_4054.GIF", text:"three paws patterns" },
          { value: "Cocktail", image: "assets/IMG_4053.GIF", text:"two paws and one liquor patterns" },
          { value: "Coffee_/_Tea", image: "assets/IMG_4051.GIF", text:"two liquor and one paws patterns"},
          { value: "Cocoa", image: "assets/IMG_4050.GIF", text:"three liquor patterns" }
      ];

      var randomCoins = coins[Math.floor(Math.random() * coins.length)];
      var randomCoinsDiv = document.getElementById("randomCoins");
      var textDiv = document.getElementById("CoinsDiv");
      randomCoinsDiv.innerHTML = `
          <img src="${randomCoins.image}" alt="Stick" style="position: absolute; width:100vw; height:auto; top:0%; left:0%">
          
      `;
      textDiv.innerHTML = `
          <div class="Instruction">
          <p>Umm, you get ${randomCoins.text}.  I see...</p>
          </div>
      `;
      localStorage.setItem("Category", randomCoins.value);
  }
  

    
  
