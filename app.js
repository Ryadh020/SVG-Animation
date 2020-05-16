  // shapes :
const robeNballsContainer = document.querySelector(".balls");
const increaseSize = document.getElementById("increase");
const decreaseSize = document.getElementById("decrease");

/* custom parameters*/
let size = 4;
let color = "grba()"

/* size editing */

increaseSize.addEventListener("click", ()=> {
  if(size <= 12) {
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

// initial function:
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
}
/* fill the game with balls */
fill()




  /* interval 
  setInterval(() => {


    setTimeout(() => {


    }, 2000);


  }, 4000);
  */

