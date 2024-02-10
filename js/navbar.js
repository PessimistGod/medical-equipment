let navbar = document.getElementById("navbar");

const menuIcon = document.getElementById('nav-menu-gif');
const crossIcon = document.getElementById('nav-cross-gif');
const navbarContent = document.getElementById('nav-content-body');

function toggleMenu(elementId) {


    if (elementId === 'nav-menu-gif') {
        menuIcon.style.display = "none"
        navbarContent.style.display = "block"
        crossIcon.style.display = "block"
        animateListItems()
    }else if (elementId === 'nav-cross-gif') {
        crossIcon.style.display = "none"
        navbarContent.style.display = "none"
        menuIcon.style.display = "block"

    }

  
    
}


function animateListItems() {
    const listItems = document.querySelectorAll('#nav-animated-content li');
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0) translateX(-50%)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.animation = 'dropAndCenter 1s forwards';

            setTimeout(() => {
                item.style.transform = 'translateY(0) translateX(50%) translateX(2rem)';
            }, 500);
        }, index * 800);
    });
}


crossIcon.style.display = "none"
navbarContent.style.display = "none"