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

Object.assign(topBtn.style, {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    padding: "10px 14px",
    border: "none",
    borderRadius: "12px",
    background: "#2f6f4e",
    color: "white",
    cursor: "pointer",
    display: "none",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    zIndex: "9999"
});

function scrollFunction() {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
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
    } else {
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});


// ===== КАРТА БАЙКАЛА (ИСПРАВЛЕННАЯ + ССЫЛКИ НА СТРАНИЦЫ) =====
if (document.getElementById('map')) {

    const map = L.map('map').setView([52.7, 105.3], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    setTimeout(() => {
        map.invalidateSize();
    }, 300);

   const places = [
    {
        name: "Листвянка",
        coords: [51.87, 104.88],
        link: "listvyanka.html",
        desc: "Посёлок у истока Ангары"
    },
    {
        name: "Ольхон",
        coords: [53.15, 107.34],
        link: "olkhon.html",
        desc: "Самый большой остров Байкала"
    },
    {
        name: "КБЖД",
        coords: [51.78, 104.55],
        link: "kbzhd.html",
        desc: "Кругобайкальская железная дорога"
    },
    {
        name: "Большое Голоустное",
        coords: [52.04, 105.40],
        link: "bolshoe_golousnoe.html",
        desc: "Тихий природный посёлок"
    },
    {
        name: "Южное Прибайкалье",
        coords: [51.60, 103.90],
        link: "yuzhnoe_pribaikalye.html",
        desc: "Горы, Байкальск и природа"
    }
];
    places.forEach(p => {
        const marker = L.marker(p.coords).addTo(map);

        marker.bindPopup(`
            <div style="min-width:200px">
                <b>${p.name}</b>
                <p style="margin:6px 0;">${p.desc}</p>

                <a href="${p.link}"
                   style="
                        display:inline-block;
                        margin-top:8px;
                        padding:6px 10px;
                        background:#2f6f4e;
                        color:#fff;
                        border-radius:8px;
                        text-decoration:none;
                        font-size:13px;
                   ">
                   Подробнее →
                </a>
            </div>
        `);
    });
}
