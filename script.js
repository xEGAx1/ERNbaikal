// ===== MAP =====
if (document.getElementById('map')) {

    const map = new maplibregl.Map({
        container: 'map',
        style: {
            version: 8,
            sources: {
                osm: {
                    type: "raster",
                    tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
                    tileSize: 256,
                    attribution: "&copy; OpenStreetMap"
                }
            },
            layers: [{
                id: "osm",
                type: "raster",
                source: "osm"
            }]
        },
        center: [105.0, 52.5],
        zoom: 6.5
    });

    const places = [
        {
            name: "Листвянка",
            coords: [104.88, 51.87],
            link: "routes/listvyanka.html",
            desc: "Посёлок у истока Ангары"
        },
        {
            name: "Ольхон",
            coords: [107.34, 53.15],
            link: "routes/olkhon.html",
            desc: "Самый большой остров Байкала"
        },
        {
            name: "КБЖД",
            coords: [104.05, 51.75],
            link: "routes/kbzhd.html",
            desc: "Кругобайкальская железная дорога"
        },
        {
            name: "Большое Голоустное",
            coords: [105.30, 52.04],
            link: "routes/bolshoe_golousnoe.html",
            desc: "Тихий природный посёлок"
        },
        {
            name: "Южное Прибайкалье",
            coords: [104.15, 51.85],
            link: "routes/yuzhnoe_pribaikalye.html",
            desc: "Горы, Байкальск и природа"
        }
    ];

    const bounds = [];

    places.forEach(p => {

        const el = document.createElement('div');
        el.style.width = "12px";
        el.style.height = "12px";
        el.style.borderRadius = "50%";
        el.style.background = "#2f6f4e";
        el.style.border = "2px solid white";

        new maplibregl.Marker(el)
            .setLngLat(p.coords)
            .setPopup(
                new maplibregl.Popup({ offset: 25 }).setHTML(`
                    <b>${p.name}</b><br>
                    <small>${p.desc}</small><br><br>
                    <a href="${p.link}"
                       style="
                       display:inline-block;
                       padding:6px 10px;
                       background:#2f6f4e;
                       color:#fff;
                       border-radius:8px;
                       text-decoration:none;">
                       Подробнее
                    </a>
                `)
            )
            .addTo(map);

        bounds.push(p.coords);
    });

    if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: 80, maxZoom: 7 });
    }
}
