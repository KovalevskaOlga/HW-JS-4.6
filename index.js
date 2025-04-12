const elem = document.querySelectorAll(".image");
// console.log(elem);

const obs = new IntersectionObserver(entries => 
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.src = entry.target.getAttribute("data-src")
            entry.target.classList.add('visible');
            entry.target.classList.add('animation');
        } else {
            entry.target.classList.remove('visible');
            entry.target.classList.remove('animation');
        }
    })
);

elem.forEach((img) => {
    obs.observe(img)
})


