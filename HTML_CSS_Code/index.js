let menuButton = document.getElementById("menuButton");
let menuBar = document.getElementById("menuBar");
let menuItem = document.getElementById("menu-item");


menuButton.addEventListener("mouseover", event => {
    menuBar.classList.add("view");
});

menuBar.addEventListener("mouseleave", event => {
    menuBar.classList.remove("view");
    resetMenuBar();
});

document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.menu-header');
    const menuItems = document.querySelectorAll('.menu-item');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.classList.toggle('visible');
            }
        });
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

function resetMenuBar() {
    const menuOptions = document.querySelectorAll('.menu-options');
    menuOptions.forEach(option => {
        option.classList.remove('visible');
    });
}