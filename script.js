console.log("Welcome to javascript")

var Sign = document.querySelector(".sign-in")
var click = document.querySelector(".click")
var down = document.querySelector(".down-arrow")
var off = 0
Sign.addEventListener("click",function(){
    if (off == 0){
        Sign.style.backgroundColor = "rgb(43, 43, 43)"
        Sign.style.color = "white"
        down.style.color = "white"
        click.style.visibility = "hidden"
        off = 1
    } else{
        Sign.style.backgroundColor = "white"
        Sign.style.color = "black"
        down.style.filter.invert = "(0)"
        click.style.visibility = "visible"
        off = 0
    }
}
)
