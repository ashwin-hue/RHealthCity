const navbar = document.getElementById("mainNavbar");
const menuToggleBtn = document.getElementById("menuToggleBtn");
const navbarNav = document.getElementById("navbarNav");
const menuOverlay = document.getElementById("menuOverlay");

const updateNavbarScroll = () => {
  const isScrolled = window.scrollY > 50;
  const isMobileWidth = window.innerWidth < 950;

  if (isScrolled || isMobileWidth) {
    navbar.classList.add("navbar-scrolled", "shadow");
    navbar.classList.remove("navbar-transparent");
  } else {
    navbar.classList.remove("navbar-scrolled", "shadow");
    navbar.classList.add("navbar-transparent");
  }
};

// Run on scroll and resize
window.addEventListener("scroll", updateNavbarScroll);
window.addEventListener("resize", updateNavbarScroll);

// Run on page load
updateNavbarScroll();

const toggleMenu = () => {
    navbarNav.classList.toggle("show");
    const isVisible = navbarNav.classList.contains("show");
    if (isVisible && window.innerWidth < 577) {
    navbarNav.style.cssText = `
        background-color: rgba(215, 104, 104, 0.95);
        padding: 1rem 2rem;
        border-radius: 8px;
        position: fixed;
        top: 80px;
        right: 10px;
        z-index: 1115;
        width: calc(100% - 20px);
        max-height: calc(100vh - 100px);
        overflow-y: auto;
    `;
    menuOverlay.style.cssText = `
        position: fixed;
        top: 80px;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        z-index: 1100;
        display: block;
    `;
    } else {
    navbarNav.style = "";
    menuOverlay.style.display = "none";
    }
};

const closeMenu = () => {
    navbarNav.classList.remove("show");
    navbarNav.style = "";
    menuOverlay.style.display = "none";
};

menuToggleBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", closeMenu);
window.addEventListener("scroll", updateNavbarScroll);
window.addEventListener("resize", () => {
    if (window.innerWidth > 576) {
    closeMenu();
    }
});


const testimonials = {
    anjali: "My name is Anjali, and I'm from Chennai. A few days ago, I had a sudden health issue and was rushed to Rajalakshmi Medical College. The doctors and nurses were incredibly supportive and acted quickly. I was admitted for two days, and I received excellent care, including quality medical attention, nutritious food, and a comfortable stay. I'm really grateful for their kindness and service.",
    ravi: "I'm Ravi from Madurai. While working on a construction site, I had an accident and was brought to Rajalakshmi Medical College. From the moment I arrived, the staff treated me with great care and urgency. I underwent surgery and was given proper post-operative care along with accommodation and meals. Their support made my recovery much smoother.",
    meena: "My name is Meena, a housewife. I was suffering from severe stomach pain and got admitted to Rajalakshmi Medical College. The hospital team provided timely and effective treatment. They ensured I was well-fed and had a clean, safe place to recover. I felt truly cared for throughout my stay.",
    sanjay: "I'm Sanjay. I met with a road accident and was brought to Rajalakshmi Medical College in critical condition. The staff acted quickly to stabilize me. Over the next few days, they kept monitoring my progress, provided all necessary medical attention, and made sure I had everything I needed—from food to emotional support. I'm thankful to be in such capable hands.",
    bharat: "My name is Bharat, I'm from Nepal. When I went to buy vegetables on my cycle I met with an accident. My boss suggested Rajalakshmi Medical College. For the past 3 days I've been admitted in the hospital. They gave good treatment and took care of me very well. They provided me free operation, food, accommodation and very well treatment."
};

const names = {
    anjali: '— Anjali',
    ravi: '— Ravi',
    meena: '— Meena',
    sanjay: '— Sanjay',
    bharat: '— Bharat'
};

const images = {
    anjali: "assets/images/anjali.jpg",
    ravi: "assets/images/ravi.jpg",
    meena: "assets/images/meena.jpg",
    sanjay: "assets/images/sanjay.jpg",
    bharat: "assets/images/bharat.jpg"
};

// Change testimonial function
function changeTestimonial(person) {
    document.getElementById('testimonial-text').textContent = testimonials[person];
    document.querySelector('.by i').textContent = names[person];
    
    // Update active class
    document.querySelectorAll('.testi-ppl').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // Update image
    document.querySelector('.main-img img').src = images[person];
}

// Play video function
function playVideo(url) {
    window.open(url, '_blank');
}

// Carousel scrolling
const carousel = document.querySelector('.carousel-track');
const boxWidth = 320;
const gap = 20;

function scrollCarousel(direction) {
    carousel.scrollBy({ left: direction * (boxWidth + gap), behavior: 'smooth' });
}



// Color changing slides


const navItems1 = document.querySelectorAll('.nav-list1 .nav-item1');
const backgroundHighlight1 = document.querySelector('.background-highlight1');
const slideImage1 = document.querySelector('.image-wrapper1');

const bgColor1 = {
    item1: '#E63946',
    item2: '#66D3E6',
    item3: '#A5A5A5',
    item4: '#FFD166'
};

const imageMap1 = {
    item1: 'assets/images/scholarship.jpg',
    item2: 'assets/images/coachingteam.jpg',
    item3: 'assets/images/academicresoures.jpg',
    item4: 'assets/images/studentSupport.jpg'
};

navItems1.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const id1 = item.id;
        const color1 = bgColor1[id1];
        const imageUrl1 = imageMap1[id1];
        if (color1 && imageUrl1)  {
            // Change background highlight gradient color
            backgroundHighlight1.style.backgroundImage =
                `linear-gradient(white, white), linear-gradient(${color1}, ${color1})`;
            // Change image
            slideImage1.style.backgroundImage = `url("${imageUrl1}")`;
            // Reset all items to default
            navItems1.forEach(el => {
                el.style.backgroundColor = 'white';
                el.style.color = 'black';
            });
            // Style hovered item
            item.style.backgroundColor = color1;
            item.style.color = 'white';
        }
    });
});



const navItems2 = document.querySelectorAll('.nav-list2 .nav-item2');
const backgroundHighlight2 = document.querySelector('.background-highlight2');
const slideImage2 = document.querySelector('.image-wrapper2');

const bgColor2 = {
    item5: '#E63946',
    item6: '#66D3E6',
    item7: '#A5A5A5',
    item8: '#FFD166'
};

const imageMap2 = {
    item5: 'assets/images/admissions.jpg',
    item6: 'assets/images/insurance.jpg',
    item7: 'assets/images/graduatestudies.jpg',
    item8: 'assets/images/visit.jpg'
};

navItems2.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const id2 = item.id;
        const color2 = bgColor2[id2];
        const imageUrl2 = imageMap2[id2];
        if (color2 && imageUrl2) {
            // Change background highlight gradient color
            backgroundHighlight2.style.backgroundImage =
                `linear-gradient(white, white), linear-gradient(${color2}, ${color2})`;
            // Change image
            slideImage2.style.backgroundImage = `url("${imageUrl2}")`;
            // Reset all items to default
            navItems2.forEach(el => {
                el.style.backgroundColor = 'white';
                el.style.color = 'black';
            });
            // Style hovered item
            item.style.backgroundColor = color2;
            item.style.color = 'white';
        }
    });
});



// Banner animation
const banners = document.querySelectorAll('.banner-left');

function checkBanners() {
    banners.forEach(banner => {
        const rect = banner.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8) && 
                            (rect.bottom >= window.innerHeight * 0.2);
        
        if (isVisible) {
            banner.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkBanners);
window.addEventListener('load', checkBanners);

// Mobile responsiveness
function handleResize() {
    const isMobile = window.innerWidth <= 400;
    const isTablet = window.innerWidth <= 1200;
    
    // Update intro section styles
    const introSection = document.querySelector('.intro-section');
    const introPart1 = document.querySelector('.intro-part1');
    const introPart2 = document.querySelector('.intro-part2');
    const boxCommon = document.querySelectorAll('.box-common');
    const box2 = document.querySelector('.box2');
    const box3 = document.querySelector('.box3');
    const fieldLabel = document.querySelector('.field-label');
    const fieldIntroTitle = document.querySelector('.field-intro-title');
    const fieldIntroPara = document.querySelector('.field-intro-para');
    const introButton = document.querySelector('.intro-button');
    
    if (isTablet) {
        introSection.style.flexDirection = 'column';
        introSection.style.rowGap = '50px';
        introPart1.style.width = '80%';
        introPart2.style.width = '80%';
        introPart2.style.height = 'fit-content';
        introPart2.style.flexDirection = 'column';
        
        boxCommon.forEach(box => {
            box.style.width = '100%';
        });
        
        box2.style.width = '100%';
        box3.style.width = '100%';
    } else {
        introSection.style.flexDirection = 'row-reverse';
        introSection.style.rowGap = '0';
        introPart1.style.width = '400px';
        introPart2.style.width = '680px';
        introPart2.style.height = '680px';
        introPart2.style.flexDirection = 'row-reverse';
        
        boxCommon.forEach(box => {
            box.style.width = '50%';
        });
        
        box2.style.width = '50%';
        box3.style.width = '50%';
    }
    
    if (isMobile) {
        fieldLabel.style.fontSize = '0.5rem';
        fieldIntroTitle.style.fontSize = '1.5rem';
        fieldIntroPara.style.fontSize = '0.5rem';
        fieldIntroPara.style.lineHeight = '1rem';
        fieldIntroPara.style.letterSpacing = '0.01rem';
        introButton.style.padding = '5px 8px';
        introButton.style.fontSize = '0.8rem';
        introButton.style.marginTop = '1rem';
    } else {
        fieldLabel.style.fontSize = '12px';
        fieldIntroTitle.style.fontSize = '3rem';
        fieldIntroPara.style.fontSize = '1rem';
        fieldIntroPara.style.lineHeight = '2rem';
        fieldIntroPara.style.letterSpacing = '0.02rem';
        introButton.style.padding = '10px 15px';
        introButton.style.fontSize = '12px';
        introButton.style.marginTop = '16px';
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
//sidebar
const sideMenu = document.getElementById('sideMenu');
  const overlay = document.getElementById('menuOverlay');
  const menuButton = document.getElementById('menuButton');
  const closeMenu1 = document.getElementById('closeMenu1');

  menuButton.addEventListener('click', () => {
    sideMenu.classList.add('show');
    overlay.classList.add('show');
  });

  closeMenu1.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    overlay.classList.remove('show');
  });

  overlay.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    overlay.classList.remove('show');
  });
  menuButton.addEventListener('click', () => {
  sideMenu.classList.add('show');
  overlay.classList.add('show');
  document.body.classList.add('no-scroll');
});

closeMenu1.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  overlay.classList.remove('show');
  document.body.classList.remove('no-scroll');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  overlay.classList.remove('show');
  document.body.classList.remove('no-scroll');
});

 document.getElementById("year").textContent = new Date().getFullYear();
//chatbox
