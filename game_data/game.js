let normalPlayer = document.getElementById("normal")
let jumpPlayer = document.getElementById("jump")
let speed_y = 0;
let y = 125;
let jumping = true;
let rail = document.getElementById("rail")
let x_rail = 600;
let score = 0;
let HScore = 0;

let save_v;

function save_HScore() {
    localStorage.setItem("variables", JSON.stringify(HScore))
}

HScore = JSON.parse(localStorage.getItem("variables"))



// Add the Click Event to the window




function addClick() {window.addEventListener("click",()=>{
    if (!jumping) {
        speed_y=22
    }
    if (jumping){jumpPlayer.style.opacity=1
    normalPlayer.style.opacity=0}
    if (!jumping){jumpPlayer.style.opacity=0
        normalPlayer.style.opacity=1}
})
}

// Increase Score





function increase_score() {
    setTimeout(() => {
        score++
        increase_score()
    }, 70);
}

// Main





function main() {
    speed_y-=1.5
    y+=speed_y
    normalPlayer.style.position="absolute"
    jumpPlayer.style.position="absolute"
    rail.style.position="absolute"
    if (y<-17) {
        y=-17; speed_y=0; jumping=false
    } else {
        jumping=true
    }

    normalPlayer.style.bottom=y+"px"
    jumpPlayer.style.bottom=y+"px"
    rail.style.left=x_rail+"px"
    rail.style.bottom="-25px"
    x_rail-=10
    if (x_rail<100) {
        if (y<50) {
            window.location.reload()
           alert("You're Dead!")
        } else {
            if (y<80) {
                if (y>70) 
                {
                    if (x_rail<170) {speed_y=0; jumping=false; y=80;}
                }
            }
        }

        if (x_rail<-175) {
            x_rail = 600;
        }
    }

    

    if (jumping){jumpPlayer.style.opacity=1
        normalPlayer.style.opacity=0}
        if (!jumping){jumpPlayer.style.opacity=0
            normalPlayer.style.opacity=1}
        document.getElementById("Score_Text").innerHTML=score
        document.getElementById("HighScore").innerHTML="High Score: "+HScore

        if (score>HScore) {
            HScore=score;
            save_HScore()
        }
    // RESET
    setTimeout(()=>{main()},30)
}

