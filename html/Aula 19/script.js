const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameOver = new Audio ('./audio/gameover.mp3');
const jumpMove = new Audio ('./audio/jump.mp3');
const startPlay = new Audio ('./audio/play.mp3');
let score = 0;
let pipePositionScore = pipe.offsetLeft;


const jump = () =>{
    
    mario.classList.add("jump");
    jumpMove.play();
    setTimeout(()=>{
        mario.classList.remove("jump");
    }, 500);
}

function iniciar(){
    document.addEventListener("keydown", jump); 
    pipe.classList.add("pipe-animation");
    clouds.classList.add("clouds-animation");
    document.getElementById("iniciar").setAttribute("hidden", "hidden");
    startPlay.play();
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
        gameOver.play(); 
        startPlay.pause(); 
        jumpMove.pause();
        //
        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;          

        recomecar.removeAttribute("hidden");
        clearInterval(loop);

    }  else if (pipePosition>pipePositionScore){
            score += 100;
            document.getElementById("score").innerHTML = score;
            pipe.style.animationDuration = aceleraPipe(); 
    }
    pipePositionScore = pipePosition;
    console.log(pipePositionScore);
},10);

function aceleraPipe(){
    let pipeT = +window.getComputedStyle(pipe).animationDuration.replace("s","");
    pipeT -= 0.2;
    return pipeT + "s";
}

