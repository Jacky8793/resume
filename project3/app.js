const text = document.querySelectorAll(".thePaths");

for (let i =0;i<text.length; i++){
    console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastWoed = document.querySelector("#nineteenth");
const animation = document.querySelector("div.animation");
lastWoed.addEventListener("animationend",() =>{
    animation.style = "transition:all 2s ease ; opacity:0;pointer-events: none;";
})