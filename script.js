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

// чтобы не дергать лишний раз — легкая оптимизация
window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);


// ===== КНОПКА "НАВЕРХ" =====
const topBtn = document.createElement('button');
topBtn.id = "topBtn";
topBtn.innerText = "↑ Наверх";
document.body.appendChild(topBtn);

// стиль кнопки (чтобы работала даже без CSS)
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

// ВАЖНО: вместо onscroll (чисто и безопасно)
window.addEventListener('scroll', scrollFunction);

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// ===== СКРЫТИЕ ШАПКИ ПРИ СКРОЛЛЕ =====
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // скролл вниз → скрываем
        header.classList.add('hide');
    } else {
        // скролл вверх → показываем
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});
