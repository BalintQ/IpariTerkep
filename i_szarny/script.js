const Iszarny = {
    start: {
        title: 'Iszárny kezdete',
        image: 'images/demokep.png',
        points: [
            { name: 'Lépcsőfordulóalja', x: 50, y: 55, target: 'lépcsőteteje' },
        ]
    },

    lépcsőteteje:{
        title: 'Lépcsőforduló',
        image: 'images/demokep.png',
        points: [
            { name: 'Belsőudvar', x: 10, y: 55, target: 'belsőudvar' },
            { name: 'Parkoló', x: 30, y: 55, target: 'parkoló' },
            { name: 'Első emelet', x: 40, y: 20, target: 'I102' },
            { name: 'Vissza a szűk folyosóra!', x: 24, y: 55, target: 'start' },
        ]
    },

    I102:{
        title: 'I102',
        image: 'images/demokep.png',
        points: [
            { name: 'Második emelet', x: 32, y: 55, target: 'secondfloor' },
            { name: 'Vissza a földszintre', x: 6, y: 55, target: 'lépcsőteteje' },

        ]
    },

    secondfloor:{
        title: 'Secondfloor',
        image: 'images/demokep.png',
        points: [
            { name: 'Termek', x: 22, y: 55, target: 'termek' },
            { name: 'Tanari', x: 25, y: 55, target: 'tanari' },
            { name: 'Vissza az első emeletre tetejére!', x: 50, y: 55, target: 'I102' },

        ]
    },

    termek:{
        title: 'Termek',
        image: 'images/demokep.png',
        points: [
            { name: 'I204', x: 66, y: 55, target: 'I204' },
            { name: 'I203', x: 67, y: 55, target: 'I203' },
            { name: 'I202', x: 98, y: 55, target: 'I202' },
            { name: 'Vissza a lépcső tetejére!', x: 50, y: 55, target: 'secondfloor' }

        ]
    },
    
    tanari:{
        title: 'Info Tanari',
        image: 'images/demokep.png',
        points: [
            { name: 'Vissza a lépcső tetejére!', x: 10, y: 55, target: 'secondfloor' },

        ]
    }
}


let photo = document.getElementById('photo');
let points = document.getElementById('points');

let helyzet = 'start';

const General=(id)=>{
    if (!Iszarny[id]){
        return
    }
    else{
    helyzet = id;
    let helyszin = Iszarny[id];
    photo.src = helyszin.image;
    photo.alt = helyszin.title;
    points.innerHTML = '';

    let i = 1;
    for (const elem of helyszin.points) {
        let point = document.createElement('button');
        point.className = 'point';
        point.name="point"
        point.style.left = elem.x + '%';
        point.style.top = elem.y + '%';
        point.textContent = i;
        point.title = elem.name;

        point.addEventListener('click', () => {
            General(elem.target);
        });

        let label = document.createElement('div');
        label.className = 'label';
        label.style.left = elem.x + '%';
        label.style.top = elem.y + '%';
        label.textContent = elem.name;
        points.append(point, label);

        i++;
    }
}   
}

General('start');

