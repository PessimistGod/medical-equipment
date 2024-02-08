let navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header id="navbar-box">
    <div class="flexBetween">
        <div class="nav-logo">
        <svg id="logo" viewBox="0 0 146.83 19.931" height="19.931" width="146.83" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-58.415 -133.676)"><g transform="translate(58.415 133.676)"><path transform="translate(-72.814 -133.676)" d="M147.777,153.607h-3.529l-5.206-8.273-5.179,8.273h-3.529l6.943-10.7-6.219-9.228h3.558l4.427,6.827,4.455-6.827h3.558l-6.249,9.228Z"></path><path transform="translate(-72.359 -133.676)" d="M156.849,153.607V133.676h2.98v19.931Z"></path><path transform="translate(-70.651 -133.676)" d="M193.382,153.607h-2.95l-2.685-14.464-5.374,11.117a2.032,2.032,0,0,1-1.83,1.149h0a2.033,2.033,0,0,1-1.828-1.141l-5.431-11.124L170.6,153.607h-2.95l3.1-18.427a1.8,1.8,0,0,1,1.778-1.5h0a1.8,1.8,0,0,1,1.626,1.025l6.367,13.323,6.366-13.323a1.8,1.8,0,0,1,1.626-1.025h0a1.8,1.8,0,0,1,1.777,1.5Z"></path><path transform="translate(-73.415 -133.676)" d="M99.15,153.607H96.2l-2.685-14.464L88.14,150.26a2.033,2.033,0,0,1-1.831,1.149h0a2.035,2.035,0,0,1-1.828-1.141l-5.43-11.124-2.685,14.464h-2.95l3.1-18.427a1.8,1.8,0,0,1,1.777-1.5h0a1.8,1.8,0,0,1,1.627,1.025l6.366,13.323L92.648,134.7a1.8,1.8,0,0,1,1.626-1.025h0a1.8,1.8,0,0,1,1.778,1.5Z"></path><path transform="translate(-70.755 -133.676)" d="M209.392,133.676h0a2.2,2.2,0,0,0-2.092,1.508l-6.128,18.422H204.3l5.1-16.315,5.068,16.315h3.124l-6.1-18.42A2.2,2.2,0,0,0,209.392,133.676Z"></path><path transform="translate(-73.518 -133.676)" d="M115.159,133.676h0a2.2,2.2,0,0,0-2.092,1.508l-6.128,18.422h3.124l5.1-16.315,5.068,16.315h3.123l-6.1-18.42A2.2,2.2,0,0,0,115.159,133.676Z"></path></g></g></svg>
        </div>

        <div>
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
            <a href=""><li><img class="navbar-content-icons" src="../assets/Icons/Icons/hospital.png" alt="" />Home</li></a>
            <a href=""><li><img class="navbar-content-icons" src="../assets/Icons/Icons/receptionist.png" alt="" />About</li></a>
            <a href=""><li><img class="navbar-content-icons" src="../assets/Icons/Icons/medical-team.png" alt="" />Team</li></a>
            <a href=""><li><img class="navbar-content-icons" src="../assets/Icons/Icons/medical-equipment.png" alt="" />Product</li></a>
            <a href=""><li><img class="navbar-content-icons" src="../assets/Icons/Icons/hospital-phone.png" alt="" />Contact</li></a>
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