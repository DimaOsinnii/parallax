const parallaxFirst = document.getElementById("parallax-1");
const parallaxSecond = document.getElementById("parallax-2");
const progressDots = document.querySelectorAll(".side-nav ul li");
const header = document.querySelector('header');
const offSetInitial = window.pageYOffset;
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


let initialPointer = offSetInitial / height;
paintBeforeElement(height, offSetInitial, initialPointer);


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
    parallaxFirst.style.backgroundPositionY = (offset - header.clientHeight) * 0.9 + "px";
    parallaxSecond.style.backgroundPositionY = (offset - header.clientHeight * 3) * 0.9 + "px";
    paintBeforeElement(height, offset, pointer);
}

function paintBeforeElement(height, offset, pointer) {
    progressDots.forEach((dotEl, index) => {
        if (index === pointer - 1) {
            dotEl.classList.add('paintToBlack', ':before');
        } else {
            dotEl.classList.remove('paintToBlack')
        }
    });
}


function scrollToHeight(height, index) {
    window.scrollTo({
        top: height * (index + 1),
        behavior: "smooth"
    });
}


// button.addEventListener("click", () => scrollToHeight(height) );

function debounce(func, wait, immediate) {
    let timeout;
    setInterval(() => timeout = null, 2500);
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
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
}, 450, true);


window.addEventListener("scroll", parallaxBg);
window.addEventListener("wheel", scroll);






