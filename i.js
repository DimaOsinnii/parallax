//
// function smoothScroll(target, duration) {
//     target = document.querySelector(target);
//     let targetPosition = target.getBoundingClientRect().top;
//     const startPosition = window.pageYOffset;
//     let  distance = targetPosition - startPosition;
//     let startTime = null;
//
//     function animation(currentTime) {
//         if (startTime === null) startTime = currentTime;
//         let timeElapsed = currentTime - startTime;
//         let run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }
//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if(t < 1) return c / 2 * t * t + b;
//         t--;
//         return  -c / 2 * (t * (t - 2) - 1) + b;
//     }
//     requestAnimationFrame(animation);
// }
// window.addEventListener("onwheel", function (event) {
//     let height = window.innerHeight
//         || document.documentElement.clientHeight
//         || document.body.clientHeight;
//     window.scrollTo({
//         top: 1000,
//         behavior: "auto"
//     })
// });