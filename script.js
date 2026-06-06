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


// ===== ШАПКА (СТАБИЛЬНОЕ ПОВЕДЕНИЕ) =====
let lastScroll = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 80) {
        header.classList.remove('hide');
        lastScroll = currentScroll;
        return;
    }

    if (currentScroll > lastScroll) {
        header.classList.add('hide');
    } else if (currentScroll < lastScroll) {
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});


// ===== ИНТЕРАКТИВНАЯ КАРТА БАЙКАЛА =====
if (document.getElementById('map')) {

    const map = L.map('map').setView([53.0, 105.0], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    const places = [
        {
            name: "Листвянка",
            coords: [51.85, 104.87],
            link: "routes.html#listvyanka"
        },
        {
            name: "Ольхон",
            coords: [53.15, 107.34],
            link: "routes.html#olkhon"
        },
        {
            name: "КБЖД",
            coords: [51.72, 104.51],
            link: "routes.html#kbzhd"
        },
        {
            name: "Большое Голоустное",
            coords: [52.04, 105.40],
            link: "routes.html#goloustnoe"
        },
        {
            name: "Южное Прибайкалье",
            coords: [51.65, 103.70],
            link: "routes.html#south_baikal"
        }
    ];

    places.forEach(p => {
        const marker = L.marker(p.coords).addTo(map);

        marker.bindPopup(`
            <b>${p.name}</b><br>
            <a href="${p.link}">Перейти к маршруту</a>
        `);

        marker.on('click', () => {
            window.location.href = p.link;
        });
    });
}
