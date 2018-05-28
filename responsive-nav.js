const trigramIcon = document.querySelector('#trigram');
const navClose = document.querySelector('#navClose');
const navDrawer = document.querySelector('#drawer');
const navItems = document.querySelectorAll('.nav__item');
const newsLink = document.querySelector('.recent-news');
const newsLinkYPos = newsLink.offsetTop;

// Function called to add shrink class to mobile nav elements
const addShrinkClass = () => {
    // Add slight delay before adding shrink class so not #drawer doesn't animate // on to close on browser window resize event
    setTimeout(() => {
        navDrawer.classList.add('shrink');
        navClose.classList.add('shrink');
    }, 500);
};

// Recursive function to add smooth scrolling to internal .recent-news location
const smoothScroll = (h) => {
    let i = h || 0;
    if (i <= newsLinkYPos) {
        setTimeout(() => {
            window.scrollTo(0, i);
            smoothScroll(i + 10);
        }, 10);
    } else if (i > newsLinkYPos) {
        navDrawer.classList.remove('hide-nav');
        addShrinkClass();
        newsLink.scrollIntoView();
    }
};

// Event listeners to toggle shrink and grow css classes
trigramIcon.addEventListener('click', () => {
    navDrawer.classList.toggle('shrink');
    navDrawer.classList.toggle('grow');
    navClose.classList.toggle('shrink');
    navClose.classList.toggle('grow');
    navDrawer.classList.remove('hide-nav');
});

navClose.addEventListener('click', () => {
    navDrawer.classList.toggle('grow');
    navDrawer.classList.toggle('shrink');
    navClose.classList.toggle('grow');
    navClose.classList.toggle('shrink');
});

navItems.forEach((elem) => {
    elem.addEventListener('click', () => {
        navDrawer.classList.toggle('grow');
        navDrawer.classList.toggle('shrink');
        navClose.classList.toggle('grow');
        navClose.classList.toggle('shrink');
    });
});

// Smooth scroll to .recent-news from first .nav__item anchor 
navItems[0].addEventListener('click', () => {
    navDrawer.classList.add('hide-nav');
    navDrawer.classList.remove('shrink');
    navClose.classList.remove('shrink');
    navDrawer.classList.remove('grow');
    navClose.classList.remove('grow');
    smoothScroll();
});

// Add .hide-nav css class to nav elements
if (window.innerWidth > 500) {
    trigram.classList.add('hide-nav');
    navClose.classList.add('hide-nav');
}

// Listen for resize events to add/remove .shrink and .grow css classes
window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    
    if (windowWidth > 500) {
        navDrawer.classList.remove('shrink');
        navDrawer.classList.remove('grow');
        navDrawer.classList.remove('hide-nav');
        navClose.classList.remove('shrink');
        navClose.classList.remove('grow');
        navClose.classList.add('hide-nav');
        trigramIcon.classList.add('hide-nav');
    } else if (windowWidth <= 500) {
        navDrawer.classList.add('hide-nav');
        navClose.classList.add('hide-nav');
        trigramIcon.classList.remove('hide-nav');
        addShrinkClass();
    }
});


