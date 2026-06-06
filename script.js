// ===== ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ =====
const items = document.querySelectorAll('.fade-in');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    items.forEach(item => {
        const boxTop = item.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);


// ===== КНОПКА "НАВЕРХ" =====
const topBtn = document.createElement('button');
topBtn.id = "topBtn";
topBtn.innerText = "↑ Наверх";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.padding = "10px 14px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "12px";
topBtn.style.background = "#2f6f4e";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
topBtn.style.zIndex = "9999";

function scrollFunction() {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

window.addEventListener('scroll', scrollFunction);

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ===== ШАПКА (СТАБИЛЬНОЕ ПОВЕДЕНИЕ, БЕЗ ПЕРЕКРЫТИЙ) =====
let lastScroll = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // всегда показываем в самом верху
    if (currentScroll <= 80) {
        header.classList.remove('hide');
        lastScroll = currentScroll;
        return;
    }

    // скролл вниз → скрываем
    if (currentScroll > lastScroll) {
        header.classList.add('hide');
    }

    // скролл вверх → показываем
    if (currentScroll < lastScroll) {
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});
