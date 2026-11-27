
const kepek = [
    
];

let aktualisKep = 0;

const kepElem = document.getElementById("kep");

function kepCsere() {
    if (kepek.length === 0) return;

    kepElem.src = kepek[aktualisKep];
}

function vissza() {
    if (kepek.length === 0) return;

    aktualisKep--;

    if (aktualisKep < 0) {
        aktualisKep = kepek.length - 1;
    }

    kepCsere();
}

function tovabb() {
    if (kepek.length === 0) return;

    aktualisKep++;

    if (aktualisKep >= kepek.length) {
        aktualisKep = 0;
    }

    kepCsere();
}
