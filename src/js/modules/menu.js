const scrollFunction = function () {
    const headerDiv = document.querySelector('.header');
    const NavMain = document.querySelector('.nav-main');
    const headerTop = document.querySelector('.header-top').offsetTop;
    const headerHeight = document.querySelector('.header').offsetHeight;
    const headerClone = document.querySelector('.header-main--clone');

    window.addEventListener('scroll', function (e) {
        const windowHeight = window.scrollY;
        // console.log(windowHeight);

        if (windowHeight > headerTop) {
            headerDiv.classList.add('is-fixed');
            headerClone.setAttribute(
                'style',
                'height: ' + headerHeight + 'px;'
            );
            NavMain.classList.add('is-fixed');
        } else {
            headerDiv.classList.remove('is-fixed');
            headerClone.removeAttribute('style');
            NavMain.classList.remove('is-fixed');
        }
    });
};

// Define our viewportWidth variable
let viewportWidth;

// Set/update the viewportWidth value
const setViewportWidth = function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
};

const mainDiv = document.querySelector('.main');
const mainH2 = '';

// Log the viewport width into the console
const logWidth = function () {
    if (viewportWidth > 640) {
        scrollFunction();
        mainDiv.setAttribute('style', 'padding-top: 200px;');
    } else {
        mainDiv.setAttribute('style', 'padding-top: 50px;');
    }
};

// Set our initial width and log it
setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener(
    'resize',
    function () {
        setViewportWidth();
        logWidth();
    },
    false
);
