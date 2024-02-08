let navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header id="navbar-box">
    <div class="flexBetween">
        <div class="nav-logo">
        <img class="nav-log-image" src="../assets/images/logo.jpeg" alt="" />    

        </div>

        <div class="nav-right-icon-position">
            <div class="nav-menu-icon" id="nav-menu-gif" onclick="toggleMenu('nav-menu-gif')">
                <div class="static-menu-gif"></div>
                <div class="animated-menu-gif"></div>
            </div>
    
            <div class="nav-menu-icon" id="nav-cross-gif" onclick="toggleMenu('nav-cross-gif')">
                <div class="static-cross-gif"></div>
                <div class="animated-cross-gif"></div>
            </div>
        </div>
    </div>
</header>


<div class="navbar-body" id="nav-content-body">
    <div id="nav-animated-content">
        <ul>
            <a href="#HomeSAL"><li><img class="navbar-content-icons" src="../assets/Icons/Icons/hospital.png" alt="" />Home</li></a>
            <a href="#AboutSAL"><li><img class="navbar-content-icons" src="../assets/Icons/Icons/receptionist.png" alt="" />About</li></a>
            <a href="#TeamSAL"><li><img class="navbar-content-icons" src="../assets/Icons/Icons/medical-team.png" alt="" />Team</li></a>
            <a href="#ProductSAL"><li><img class="navbar-content-icons" src="../assets/Icons/Icons/medical-equipment.png" alt="" />Product</li></a>
            <a href="#GallerySAL" style="display:flex;"><li><img class="navbar-content-icons" src="../assets/Icons/Icons/image-gallery.png" alt="" />Gallery</li></a>
            <a href="#ContactSAL" style="display:flex;"><li><img class="navbar-content-icons" src="../assets/Icons/Icons/hospital-phone.png" alt="" />Contact</li></a>
            
        </ul>
    </div>
</div>





`;

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