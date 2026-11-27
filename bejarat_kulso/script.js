const Iszarny = {
    start:{
        title: 'Főbejárat',
        image: '../pictures/large/corridor/I_szarny/_MG_9752.JPG',
        points: [
            { name: 'Menjé ki', x: 48, y: 50, target: 'tanariparkolo' },
            { name: 'Megfordul', x: 50, y: 80, target: 'belsoudvar_I' },
        ]
    },

    tanariparkolo:{
        title: 'Tanári Parkoló',
        image: '../pictures/large/corridor/I_szarny/_MG_9752.JPG',
        points: [
            { name: 'Menjé ki', x: 48, y: 50, target: 'tanariparkolo' },
            { name: 'Megfordul', x: 50, y: 80, target: 'belsoudvar_I' },
        ]
    },

    belsoudvar_I:{
        title: 'Tanári Parkoló',
        image: '../pictures/large/corridor/I_szarny/_MG_9751.JPG',
        points: [
            { name: 'Belsőudvar', x: 50, y: 50, target: '' },
            { name: 'Megfordul', x: 50, y: 80, target: 'tanariparkolo' },
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

