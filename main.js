
function parallax(event) {
 let layers = this.querySelectorAll('.layer');
layers.forEach(layer => {
    let speed = layer.getAttribute('data-val');
        layer.style.transform = `translate(${event.clientX * (- 1) * speed / 1000}px, ${event.clientY  * (- 1) * speed / 1000}px)`;
    });
}
const header = document.querySelector('header');
header.addEventListener("mousemove", parallax);

const  parallaxFirst = document.getElementById("parallax-1");
const  parallaxSecond = document.getElementById("parallax-2");

function parallaxBg() {
    let offset = window.pageYOffset;
    parallaxFirst.style.backgroundPositionY = (offset - header.clientHeight) * 0.9 + "px";
    parallaxSecond.style.backgroundPositionY = (offset- header.clientHeight * 3) * 0.9  + "px";

}
window.addEventListener("scroll", parallaxBg);

const button = header.querySelector('.btn');
const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

button.addEventListener("click", function () {
   window.scrollTo({
       top: height,
       behavior: "smooth"
   });
});
function debounce(func, wait, immediate) {
    let timeout;
    setInterval(() => timeout = null, 2500);
    return function() {
        let context = this, args = arguments;
        let later = function() {
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
        if(e.deltaY < 0) {
            window.scrollTo({
                top: window.pageYOffset - blocks[1].clientHeight,
                behavior: "smooth"
            });
        }
        else if(e.deltaY > 0) {
            window.scrollTo({
                top: window.pageYOffset + blocks[1].clientHeight,
                behavior: "smooth"
            });
        }
        console.log(window.pageYOffset);
        console.log(blocks[1]);
    }, 450, true);

window.addEventListener("wheel", scroll);






