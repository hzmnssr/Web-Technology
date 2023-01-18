// Start nav-section && checkbtn
const checkbtn = document.querySelector(".checkbtn")
const navLinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links li a")


// an event functiokn to process the event for clicking on the list
checkbtn.addEventListener("click", () => {
    navLinks.classList.toggle("open")
})






///Start Carousel 

const buttons = document.querySelectorAll("[data-carousel-button]")

//by doing it this way no matter how many imgs its all gonna work the same way
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.CDATA_SECTION_NODE.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


// dark and light theem
document.getElementById("dark-them-btn").addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "#333")
})

document.getElementById("light-them-btn").addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "rgb(214, 214, 214)")
})




const d = new Date();
let text = d.toLocaleString();
document.getElementById("date").innerHTML= text;
document.getElementById("date").style.color = "#eaeaea"





