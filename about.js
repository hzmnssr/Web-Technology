const checkbtn = document.querySelector(".checkbtn")
const navLinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links li a")

checkbtn.addEventListener("click", () => {
    navLinks.classList.toggle("open")
})



/// dark and light them 
document.getElementById("dark-them-btn").addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "#333")
})

document.getElementById("light-them-btn").addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "rgb(214, 214, 214)")
})



//////////////////////
const d = new Date();
let text = d.toLocaleString();
document.getElementById("date").innerHTML= text;
document.getElementById("date").style.color = "#eaeaea"