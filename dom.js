


const header = document.getElementById("main-header");
const contents = document.getElementsByClassName("content");
const paragraphs = document.getElementsByTagName("p");
const firstLink = document.querySelector(".nav-link");
const allLinks = document.querySelectorAll(".nav-link");


const h1Element = document.querySelector("h1");
const allContentElements = document.querySelectorAll(".content");
const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const navListItems = document.querySelectorAll("nav ul li");
const firstNavElement = document.querySelector(".nav-link");
const lastParagraph = document.querySelector("article p:last-of-type");


const nav = document.querySelector("nav");
console.log("Parent:", nav.parentElement); 
console.log("Children:", nav.children); 


const mainTitle = document.querySelector("h1");
mainTitle.textContent = "Interactive DOM Practice";

const container = document.querySelector(".container");
Object.assign(container.style, {
    backgroundColor: "#fafafa",
    padding: "25px",
    borderRadius: "10px"
});


const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically added paragraph!";
newParagraph.className = "content highlight";

const article = document.querySelector("article");
article.appendChild(newParagraph);

function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    li.appendChild(a);
    document.querySelector(".nav-list").appendChild(li);
}
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");



const testButton = document.createElement("button");
testButton.textContent = "Click Me";
document.body.appendChild(testButton);

testButton.addEventListener("click", (event) => {
    console.log("Button clicked at coordinates:", event.clientX, event.clientY);
});


document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === 's') {
        event.preventDefault();
        alert("Saved!");
    }
    if (event.key === "Escape") {
        const form = document.getElementById("contact-form");
        if (form) form.reset();
    }
});


document.querySelector(".nav-list").addEventListener("click", (event) => {
    const targetLink = event.target.closest("a");
    if (targetLink) {
        console.log("Nav link clicked:", targetLink.textContent);
    }
});


const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");

if (nameInput) {
    nameInput.addEventListener("input", (event) => {
        if (event.target.value.length < 2) {
            event.target.style.borderColor = "red";
        } else {
            event.target.style.borderColor = "green";
        }
    });
}
