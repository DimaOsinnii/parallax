

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
    parallaxFirst.style.backgroundPositionY = offset * 1.5 + "px";
    parallaxSecond.style.backgroundPositionY = offset * 0.1 + "px";
}

window.addEventListener("scroll",function () {
    parallaxBg();
});
window.addEventListener("onwheel", function (event) {
    let height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    event.preventDefault();

});






