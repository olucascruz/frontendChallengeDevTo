function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const mainSection = document.getElementById("camp-activities-inquiry")
const form = document.getElementsByTagName("form")[0];
const body = document.getElementsByTagName("body")[0];
const particlesDiv =  document.createElement("div");
body.appendChild(particlesDiv)
particlesDiv.classList.add("particles")



const particles = []
for (let index = 0; index < 20; index++) {
    const element =  document.createElement("div");
    particlesDiv.appendChild(element)
    
    element.style.top = `${getRandomNumber(100, 450)}px`
    element.style.left = `${getRandomNumber(1, 550)}px`
    element.style.borderRadius = `50%`
    element.classList.add("particle")   
    
    const timeAnimation = getRandomNumber(6, 10); // random duration between 3 and 8 seconds
    element.style.animationDuration = `${timeAnimation}s`;

    particles.push(element)
}

form.addEventListener("submit", e =>{
    e.preventDefault()
    console.log("submit")
    form.style.display= "None"
    let p = document.createElement("h2");

    mainSection.appendChild(p)

    p.style.marginTop = "10%"
    p.innerHTML="Your form has been sent"
})