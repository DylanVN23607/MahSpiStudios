let normalPlayer = document.getElementById("normal")
let jumpPlayer = document.getElementById("jump")
let speed_y = 0;
let y = 125;
let jumping = true;

window.addEventListener("click",()=>{
    speed_y=17
    if (jumping){jumpPlayer.style.opacity=1
    normalPlayer.style.opacity=0}
    if (!jumping){jumpPlayer.style.opacity=0
        normalPlayer.style.opacity=1}
})

function main() {
    speed_y--
    y+=speed_y
    normalPlayer.style.position="absolute"
    jumpPlayer.style.position="absolute"
    if (y<-17) {y=-17; speed_y=0; jumping=false} else {jumping=true}
    normalPlayer.style.bottom=y+"px"
    jumpPlayer.style.bottom=y+"px"
    


    if (jumping){jumpPlayer.style.opacity=1
        normalPlayer.style.opacity=0}
        if (!jumping){jumpPlayer.style.opacity=0
            normalPlayer.style.opacity=1}
    // RESET

    setTimeout(()=>{main()},30)
}
main()