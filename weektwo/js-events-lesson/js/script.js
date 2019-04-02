function turnRed() {
  document.querySelector("body").className = "red-theme";
}
function turnWhite() {
  document.querySelector("body").className = "white-theme";
}
function turnBlue() {
  document.querySelector("body").className = "blue-theme";
}
function turnYellow() {
  document.querySelector("body").className = "yellow-theme";
}


let redbtn = document.getElementById('redButton')

    addEventListener('click', (e)=>{

    console.log(e.target)
    document.body.style.backgroundColor = "red"
})