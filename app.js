const brandIntro = document.getElementById('brand-intro');
const navBar = document.querySelectorAll('.nav-list-items li');
const coverImage = document.getElementById('cover-image');
const body = document.querySelector('body');
const custommove = document.querySelectorAll('#custom-select select')
const custom = document.querySelectorAll('#custom-select option')


const brandAnimate = () => {
    brandIntro.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 2000, iterations: 1 });
    for (const element of navBar) {
        element.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 2000, iterations: 1 });
    }
}

brandAnimate();






