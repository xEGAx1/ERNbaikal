if (document.getElementById('map')) {

    // ===== СОЗДАНИЕ КАРТЫ =====
    const map = L.map('map', {
        zoomControl: true
    }).setView([52.5, 105.0], 7); // нормальный центр Байкала

    // ===== СЛОЙ КАРТЫ (оставляем OpenStreetMap — он стандартный и нормальный) =====
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    const group = L.featureGroup().addTo(map);

    // ===== МЕСТА (ИСПРАВЛЕННЫЕ КООРДИНАТЫ) =====
    const places = [
        {
            name: "Листвянка",
            coords: [51.87, 104.88],
            link: "routes/listvyanka.html",
            desc: "Посёлок у истока Ангары"
        },
        {
            name: "Ольхон",
            coords: [53.15, 107.34],
            link: "routes/olkhon.html",
            desc: "Самый большой остров Байкала"
        },
        {
            name: "КБЖД",
            coords: [51.72, 103.64], // ✔ ВАЖНО: подняли севернее/восточнее берега
            link: "routes/kbzhd.html",
            desc: "Кругобайкальская железная дорога"
        },
        {
            name: "Большое Голоустное",
            coords: [52.04, 105.30],
            link: "routes/bolshoe_golousnoe.html",
            desc: "Тихий природный посёлок"
        },
        {
            name: "Южное Прибайкалье",
            coords: [51.85, 104.15], // ✔ нормальная зона Байкальска
            link: "routes/yuzhnoe_pribaikalye.html",
            desc: "Горы, Байкальск и природа"
        }
    ];

    // ===== МАРКЕРЫ + ПОПАПЫ =====
    places.forEach(p => {

        const marker = L.marker(p.coords).addTo(map);

        marker.bindPopup(`
            <div style="min-width:200px">
                <b>${p.name}</b><br>
                <small>${p.desc}</small><br><br>

                <a href="${p.link}" style="
                    display:inline-block;
                    padding:6px 10px;
                    background:#2f6f4e;
                    color:#fff;
                    border-radius:8px;
                    text-decoration:none;
                    font-size:13px;
                ">
                    Подробнее
                </a>
            </div>
        `);

        group.addLayer(marker);
    });

    // ===== АВТОМАСШТАБ (ЭТО УБИРАЕТ “В ВОДЕ”) =====
    map.fitBounds(group.getBounds().pad(0.25));
}
