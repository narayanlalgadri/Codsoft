let name = document.getElementById('name'); 
let tag = document.getElementById('tag');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    name.style.transform = `translateY(${value * 0.8}px)`;
    tag.style.transform = `translateY(${value * 0.8}px)`;
});
