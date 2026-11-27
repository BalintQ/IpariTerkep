const elerheto = ['start', 'eloszoba', 'udvarajto', 'folyoso0', 'lepcso1', 'atjaro', 'lepcsoLe0', 'atjaroVissza', 'szekrenyes', 'h002', 'szekrenyesVissza', 'lepcsoFel0', 'h011sarok', 'h011'];
let aktualis = 'start';
let elozmenyek = [];

function megnyit(id) {
    if (!elerheto.includes(id)) return;
    if (id != aktualis) elozmenyek.push(aktualis);
    aktualis = id;
    megjelenit();
}

function megjelenit() {
    let hely = helyszinek[aktualis];
    document.getElementById('cim').textContent = hely.title;
    document.getElementById('info').textContent = hely.info;
    let kep = document.getElementById('kep');
    kep.src = hely.image;
    kep.alt = hely.title;
    let pontok = document.getElementById('pontok');
    pontok.innerHTML = '';
    for (let i = 0; i < hely.points.length; i++) {
        let pont = hely.points[i];
        if (!elerheto.includes(pont.target)) continue;
        let gomb = document.createElement('button');
        gomb.className = 'pont';
        gomb.textContent = pont.name;
        gomb.style.left = pont.x + '%';
        gomb.style.top = pont.y + '%';
        gomb.onclick = function() { megnyit(pont.target); };
        pontok.appendChild(gomb);
    }
    document.getElementById('vissza').disabled = elozmenyek.length == 0;
    listaFrissit();
}

function visszalep() {
    if (elozmenyek.length == 0) return;
    aktualis = elozmenyek.pop();
    megjelenit();
}

function listaFrissit() {
    let lista = document.getElementById('lista');
    let keres = document.getElementById('kereses').value.toLowerCase();
    lista.innerHTML = '';
    for (let i = 0; i < elerheto.length; i++) {
        let id = elerheto[i];
        let hely = helyszinek[id];
        if (!hely.title.toLowerCase().includes(keres)) continue;
        let gomb = document.createElement('button');
        gomb.textContent = hely.title;
        if (id == aktualis) gomb.className = 'aktiv';
        gomb.onclick = function() { megnyit(id); };
        lista.appendChild(gomb);
    }
    if (lista.children.length == 0) lista.textContent = 'Nincs találat.';
}

megjelenit();
