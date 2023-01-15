let normalPlayer = document.getElementById("normal")
let jumpPlayer = document.getElementById("jump")
let crouchPlayer = document.getElementById("crouch")
let rail = document.getElementById("rail")
let drone = document.getElementById("drone")
let crouchButton = document.getElementById("crouchBtn")
let jumpButton = document.getElementById("jumpBtn")
let jumping = true;
let crouching = false;
let x_rail = 800;
let x_drone = 1500;
let score = 0;
let HScore = 0;
let speed_y = 0;
let y = 125;

let save_v;

function save_HScore() {
    localStorage.setItem("variables", JSON.stringify(HScore))
}

HScore = JSON.parse(localStorage.getItem("variables"))

crouchButton.addEventListener("mousedown",()=>{
    crouching=true
})

crouchButton.addEventListener("mouseup",()=>{
    crouching=false
})

function jump() {
    if (!jumping) {
        speed_y=22
    }
}


function addControls() {
        if (jumping){jumpPlayer.style.opacity=1
        normalPlayer.style.opacity=0
        crouchPlayer.style.opacity=0}
        if (!jumping){jumpPlayer.style.opacity=0
        normalPlayer.style.opacity=1}

    window.addEventListener("keydown",(event)=>{
        if (event.key=='ArrowDown') {
            crouching=true
        }
    })
    
    window.addEventListener("keyup",(event)=>{
        if (event.key=='ArrowDown') {
            crouching=false
        }
    })

    window.addEventListener("keydown",(event)=>{
        if (event.key=='ArrowUp') {
            jump()
        }
    })

    window.addEventListener("keydown",(event)=>{
        if (event.key==' ') {
            jump()
        }
    })

    window.addEventListener("keydown",(event)=>{
        if (event.key=='W') {
            speed_y=22
        }
    })

}

// Increase Score





function increase_score() {
    setTimeout(() => {
        score++
        increase_score()
    }, 70);
}

// DEATH OHOHOOH



function death() {
    window.location.reload()
    alert("You're Dead!")
}

// Main





function main() {
    jumpButton.style.opacity=1
    crouchButton.style.opacity=1

    speed_y-=1.5
    y+=speed_y
    normalPlayer.style.position="absolute"
    jumpPlayer.style.position="absolute"
    crouchPlayer.style.position="absolute"
    drone.style.position="absolute"
    rail.style.position="absolute"
    if (y<-17) {
        y=-17; speed_y=0; jumping=false
    } else {
        jumping=true
    }

    normalPlayer.style.bottom=y+"px"
    jumpPlayer.style.bottom=y+"px"
    crouchPlayer.style.bottom=y+"px"

    drone.style.left=x_drone+"px"

    rail.style.left=x_rail+"px"
    rail.style.bottom="-25px"
    drone.style.bottom="90px"
    x_rail-=15
    x_drone-=15
    if (x_rail<100) {
        if (y<50) {
            death()
        } else {
            if (y<80) {
                if (y>70) 
                {
                    if (x_rail<170) {speed_y=0; jumping=false; y=80;}
                }
            }
        }


        if (x_rail<-175) {
            x_rail = 800;
        }

        if (x_drone<-175) {
            x_drone = 1500;
        }
    }

    if (x_drone<90) {
        if (!crouching) {
            if (x_drone>70) {
                death()
            }
        }
}    

    if (jumping){jumpPlayer.style.opacity=1
        normalPlayer.style.opacity=0}
        if (!jumping){jumpPlayer.style.opacity=0
            normalPlayer.style.opacity=1}
            if (crouching){
                jumpPlayer.style.opacity=0
                normalPlayer.style.opacity=0
                crouchPlayer.style.opacity=1
            }
            if (!crouching){
                crouchPlayer.style.opacity=0
            }
        document.getElementById("Score_Text").innerHTML=score
        document.getElementById("HighScore").innerHTML="High Score: "+HScore

        if (score>HScore) {
            HScore=score;
            save_HScore()
        }
    // RESET
    console.log(x_drone)
    setTimeout(()=>{main()},30)
}

