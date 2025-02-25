let menuButton = document.getElementById("menuButton");
let menuBar = document.getElementById("menuBar");

menuButton.addEventListener("mouseover", event => {
    
    menuBar.classList.add("view");
})

menuBar.addEventListener("mouseout", event => {
    menuBar.classList.remove("view");
 })