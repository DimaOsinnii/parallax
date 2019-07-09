const parallaxFirst = document.getElementById("parallax-1");
const parallaxSecond = document.getElementById("parallax-2");
const progressDots = document.querySelectorAll(".side-nav ul li");
const navLineUl = document.querySelector(".side-nav ul");
const header = document.querySelector('header');
const offSetInitial = window.pageYOffset;
const instagram = document.getElementById('insta');
const btnChildAll = document.querySelectorAll('.btn-child');
// const api = [
//     'https://jsonplaceholder.typicode.com/todos/',
//     'https://jsonplaceholder.typicode.com/posts/',
//     'https://jsonplaceholder.typicode.com/albums/',
//     'https://jsonplaceholder.typicode.com/users/'
// ];


const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

let initialPointer = offSetInitial / height;


console.log(`initial height: ${height},
initial offset ${offSetInitial},
initial pointer ${initialPointer}`);


paintBeforeElement(height, offSetInitial, initialPointer, navLineUl);

// async function fetchData(index) {
//     try {
//         await fetch(api[index])
//             .then(response => {
//                 if (response.status === 200) {
//                     return response.json()
//                 }else{
//                     console.log('sas');
//                 }
//             }).then(data => console.log(data))
//     } catch (e) {
//         console.log(e, 'jopa, barebukh')
//     }
// }

btnChildAll.forEach((single, index) => {
    single.addEventListener('click', () => {
        scrollToHeight(height, index);
    });
    // single.addEventListener('mouseenter', () => {
    //     fetchData(index);
    // });
});

function parallax(event) {
    let layers = this.querySelectorAll('.layer');
    layers.forEach(layer => {
        let speed = layer.getAttribute('data-val');
        layer.style.transform = `translate(${event.clientX * (-1) * speed / 1000}px, ${event.clientY * (-1) * speed / 1000}px)`;

        // if (index === 1) {
        //     layer.style.transform = `translate(${event.clientX * (1) * speed / 1000}px, ${event.clientY * (1) * speed / 1000}px)`;
        // } else if (index === 2) {
        //     layer.style.transform = `translate(${event.clientX * (-1) * speed / 1000}px, ${event.clientY * (-1) * speed / 1000}px)`;
        // }else{
        //     layer.style.transform = `translate(${event.clientX * (-1) * speed / 1000}px, ${event.clientY * (-1) * speed / 1000}px)`;
        // }
    });
}
header.addEventListener("mousemove", parallax);
function parallaxBg() {
    let offset = window.pageYOffset;
    let pointer = offset / height;
    // console.log(pointer);
    parallaxFirst.style.backgroundPositionY = (offset - header.clientHeight) * 0.9 + "px";
    parallaxSecond.style.backgroundPositionY = (offset - header.clientHeight * 3) * 0.9 + "px";
    paintBeforeElement(height, offset, pointer, navLineUl);
}

function between(x, min, max) {
    return x >= min && x <= max;
}

function paintBeforeElement(height, offset, pointer, ul) {
    progressDots.forEach((dotEl, index) => {
        if (pointer === 2) {
            dotEl.classList.add('paintToBlack');
            ul.style.borderColor="black";
            instagram.setAttribute("fill", "#000");
        }
        else {
            dotEl.classList.remove('paintToBlack');
            ul.style.borderColor="white";
            instagram.setAttribute("fill", "#fff");
        }
        if (pointer - 1 === index) dotEl.classList.add('paintToRed', ':before');
        else {dotEl.classList.remove('paintToRed');}
    });
    // console.log(pointer);
}

function scrollToHeight(height, index) {
    window.scrollTo({
        top: height * (index + 1),
        behavior: "smooth"
    });
    paintBeforeElement(height, window.pageYOffset, index - 1, navLineUl);
}

// button.addEventListener("click", () => scrollToHeight(height) );

function debounce(func, wait, immediate) {
    let timeout;
    setInterval(() => timeout = null, wait);
    return function () {
        let context = this, args = arguments;
        let later = function () {
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

let scroll = debounce(function (e) {

    let blocks = document.querySelectorAll('.screen');
    if (e.deltaY < 0) {
        window.scrollTo({
            top: window.pageYOffset - blocks[1].clientHeight,
            behavior: "smooth"
        });
    } else if (e.deltaY > 0) {
        window.scrollTo({
            top: window.pageYOffset + blocks[1].clientHeight,
            behavior: "smooth"
        });
    }
}, 1020, true);


window.addEventListener("scroll", parallaxBg);
window.addEventListener("wheel", scroll);

//Video player
let mediaPlayer;
let btn = document.getElementById('play-pause-button');
let btnCircle = document.querySelector('.button-circle');
document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, true);
function initialiseMediaPlayer() {
    mediaPlayer = document.getElementById('media-video');
    mediaPlayer.controls = true;
}
function t() {
    if(mediaPlayer.pause) {
        mediaPlayer.play();
        btn.style.opacity = '0';
        btnCircle.style.opacity = '0';
    }
    else {
        btn.style.opacity = '1';
        btnCircle.style.opacity = '1';
        mediaPlayer.pause();
    }
}
function togglePlayPause() {
    if (mediaPlayer.paused || mediaPlayer.ended) {
        mediaPlayer.play();
        btn.className = 'pause';
        btn.style.opacity = '0';
        btnCircle.style.opacity ='0';
    }
    else {
        mediaPlayer.pause();
        btn.className = 'play';
        btn.style.opacity = '1';
        btnCircle.style.opacity ='1';
    }
}

window.addEventListener('resize', e => {
    e.preventDefault();
    let point = window.pageYOffset / window.innerHeight;
    let windHeight = window.innerHeight;
    let flooredPoint = Math.round(point) - 1;
    scrollToHeight(windHeight, flooredPoint);
});

