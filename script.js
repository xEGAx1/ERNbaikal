// Появление элементов при скролле
const items = document.querySelectorAll('.fade-in');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    items.forEach(item => {
        const boxTop = item.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            item.classList.add('show');
            const img = item.querySelector('img');
            if(img) img.parentElement.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();

// Кнопка Наверх
const topBtn = document.createElement('button');
topBtn.id = "topBtn";
topBtn.innerText = "Наверх";
document.body.appendChild(topBtn);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

topBtn.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
