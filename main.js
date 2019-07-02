
function parallax(event) {
 let layers = this.querySelectorAll('.layer');
layers.forEach(layer => {
    let speed = layer.getAttribute('data-val');
        layer.style.transform = `translate(${event.clientX * (- 1) * speed / 1000}px, ${event.clientY  * (- 1) * speed / 1000}px)`;
    });
}
let header = document.querySelector('header');
header.addEventListener("mousemove", parallax);






