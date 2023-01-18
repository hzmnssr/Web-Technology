const checkbtn = document.querySelector(".checkbtn")
const navLinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links li a")

checkbtn.addEventListener("click", () => {
    navLinks.classList.toggle("open")
})

// ///Start form validation function

const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs()
})


function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()

    if(usernameValue === "") {
        // show error
        // add error class
        setErrorFor(username, "Username cannot be blank")
    } else {
        // add success class
        setSuccessFor(username)
    }

    if(emailValue ===""){
        setErrorFor(email, "Email cannot be blank")
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid")
    } else {
        setSuccessFor(email)
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement // .form-control
    const small = formControl.querySelector("small")

    //add error message inside small 
    small.innerText = message

    //add error class 
    formControl.className ="form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = "form-control success"
}

function isEmail(email) {
    return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
///End form validation function



document.getElementById("dark-them-btn").addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "#333")
})

document.getElementById("light-them-btn").addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "rgb(214, 214, 214)")
})




///////////////////////////
const d = new Date();
let text = d.toLocaleString();
document.getElementById("date").innerHTML= text;
document.getElementById("date").style.color = "#eaeaea"