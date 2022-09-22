const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
let score = 0;
let pipePositionScore = pipe.offsetLeft;


const jump = () =>{
    mario.classList.add("jump");
    setTimeout(()=>{
        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    //+server para converter um string number em number
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");
    const cloudsPosition = clouds.offsetLeft;
    const recomecar = document.getElementById("recomecar");
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        //
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;
        mario.src = "./imagens/game-over.png";
        mario.style.width = "80px" ;
        mario.style.marginLeft = "45px";    
        //
        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;          

        recomecar.removeAttribute("hidden");
        clearInterval(loop);

    }  else if (pipePosition>pipePositionScore){
            score += 100;
            document.getElementById("score").innerHTML = score;
         
            
            
            if(score>=200){
                //pipe.style.animation = "pipe-animation 1.5s infinite linear";  
                pipe.style.animationDuration = "1s";  
            }
            
                    
    }
    pipePositionScore = pipePosition;
},10);


document.addEventListener("keydown", jump); 