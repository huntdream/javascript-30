const mask = document.querySelector('#mask');
const reveal = document.querySelector('#reveal');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
};
const img = document.createElement('IMG');
img.loaded = false;

const callback = function (entries, observer) {
    entries.forEach(entry => {
        const el = entry.target;
        if (entry.intersectionRatio == 1 && !img.loaded) {
            img.src = '../src/image/eagle.jpg';
            img.className = 'img';
            img.animate([{
                    opacity: 0,
                    transform: "scale(0)"
                },
                {
                    opacity: 0.5,
                    transform: "scale(.5)"
                },
                {
                    opacity: 1,
                    transform: "scale(1)"
                }
            ], {
                duration: 3000,
            })
            el.appendChild(img);
            img.loaded = true;
            console.log(img.loaded);
        }
    })
};
const observer = new IntersectionObserver(callback, options);
window.onload = observer.observe(reveal);