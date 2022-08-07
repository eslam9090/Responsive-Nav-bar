let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", (params) => {

    if (window.scrollY >= 50) {
        navbar.classList.add("active")
    } else {
        navbar.classList.remove("active")

    }
})


let meun_bar = document.querySelector("#meun_bar")
let close_bar = document.querySelector("#close_bar")
let ul__links = document.querySelector(".ul__links")



meun_bar.addEventListener("click", (eo) => {

    ul__links.style.display = "block"
    close_bar.style.display = "block"
    meun_bar.style.display = "none"

})
close_bar.addEventListener("click", (eo) => {
    meun_bar.style.display = "block"
    ul__links.style.display = "none"
    close_bar.style.display = "none"


})


let btn = document.querySelector(".btn")


window.addEventListener("scroll" , (eo) => {
    
    if(window.scrollY >= 200 ){
        btn.classList.add("show")

    }else{
        btn.classList.remove("show")

    }
})

btn.addEventListener("click" , (eo) => {
    window.scrollTo({
        top:0 ,
        behavior : "smooth",
    })
    
})