  // elements :
const robeNballsContainer = document.querySelector(".balls");
let leftBall;
let ball;
let rightBall;
const increaseSize = document.getElementById("increase");
const decreaseSize = document.getElementById("decrease");
const startButton = document.getElementById("start");
const randomColor = document.getElementById("randomColor");
/* custom parameters*/
let size = 4;
let color = "grba()"
/* colors*/ 
let clolors = [
  "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
  "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)",
  "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
  "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
  "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
]

/* size editing */
increaseSize.addEventListener("click", ()=> {
  if(size <= 9) {
    size++ 
    fill()
  } else {
    console.log("error");
  }
})

decreaseSize.addEventListener("click", ()=> {
  if(size >= 2) {
    size--
    fill()
  } else {
    console.log("error");
  }
})

/* fill the game function*/
const fill = ()=> {
  robeNballsContainer.innerHTML = " "
  /* add the first ball*/
  robeNballsContainer.innerHTML += `
      <div class="raw" id="left">
        <div class="robe"></div>
        <div class="ball"></div>
      </div>
    `
  /*add the middle balls */
  for (let i = 0; i < size; i++) {
    robeNballsContainer.innerHTML += `
      <div class="raw">
          <div class="robe"></div>
          <div class="ball"></div>
        </div>
      `
  }

  /* add the last ball*/
  robeNballsContainer.innerHTML += `
      <div class="raw" id="right">
        <div class="robe"></div>
        <div class="ball"></div>
      </div>
    `

  leftBall = document.getElementById("left");
  rightBall = document.getElementById("right");
  ball = document.querySelectorAll(".ball");
}

/* start game function */
const startGame = ()=> {
  // disable the button
  setInterval(() => {

    leftBall.style.transform = "rotate(10deg)"
    
    setTimeout(() => {

      leftBall.style.transform = "rotate(0deg)"
      
    }, 500);

    setTimeout(() => {

      rightBall.style.transform = "rotate(-10deg)"

    }, 1000);

    setTimeout(() => {

      rightBall.style.transform = "rotate(0deg)"

    }, 1500);


  }, 2000);
}

/* choose a random color */
const pickColor = ()=> {
      // choose a random namber:
      let randomNumber = Math.random() * clolors.length
      // display colors:
    ball.forEach(bol => {
      bol.style.backgroundImage = clolors[Math.floor(randomNumber)]
    });
}

fill()
startButton.addEventListener("click", startGame)
randomColor.addEventListener("click", pickColor)



    

  

