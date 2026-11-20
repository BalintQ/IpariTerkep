const Iszarny = {
    start: {
        title: 'Iszárny kezdete',
        image: '../pictures/large/corridor/I_szarny/_MG_9755.jpg',
        points: [
            { name: 'Lépcső', x: 50, y: 55, target: 'lepcső' },
        ]
    },

     lepcső: {
        title: 'Iszárny lépcső',
        image: '../pictures/large/corridor/I_szarny/_MG_9753.jpg',
        points: [
            { name: 'I lépcső', x: 50, y: 55, target: 'start' },
            { name: 'Lépcsőteteje', x: 50, y: 70, target: 'lépcsőteteje' }
        ]
    },

    lépcsőteteje:{
        title: 'Lépcsőforduló',
        image: '../pictures/large/corridor/I_szarny/_MG_9754.JPG',
        points: [
            { name: 'Belsőudvar', x: 30, y: 50, target: 'belsoudvar' },
            { name: 'Parkoló', x: 40, y: 50, target: 'parkolo' },
            { name: 'Első emelet', x: 55, y: 50, target: 'firstfloor' },
            { name: 'Vissza a lépcsőre!', x: 50, y: 85, target: 'lepcső' },
        ]
    },

    parkolo:{
        title: 'Tanári Parkoló',
        image: '../pictures/large/corridor/I_szarny/_MG_9752.JPG',
        points: [
            { name: 'Belsőudvar', x: 30, y: 50, target: '' },
            { name: 'Vissza', x: 40, y: 50, target: 'lépcsőteteje' },
        ]
    },

    belsoudvar:{
        title: 'Tanári Parkoló',
        image: '../pictures/large/corridor/I_szarny/_MG_9751.JPG',
        points: [
            { name: 'Belsőudvar', x: 30, y: 50, target: '' },
            { name: 'Vissza', x: 40, y: 50, target: 'lépcsőteteje' },
        ]
    },

    firstfloor:{
        title: 'I102',
        image: '../pictures/large/corridor/I_szarny/_MG_9749.jpg',
        points: [
            { name: 'Második emelet', x: 60, y: 45, target: 'secondfloor1' },
            { name: 'Vissza a földszintre', x: 33, y: 60, target: 'lépcsőteteje' },

        ]
    },

      secondfloor1:{
        title: 'Secondfloor',
        image: '../pictures/large/corridor/I_szarny/_MG_9745.jpg',
        points: [
            { name: 'Termek', x: 22, y: 55, target: 'I204' },
            { name: 'Tanari', x: 25, y: 60, target: 'tanari' },
            { name: 'Vissza', x: 50, y: 65, target: 'firstfloor' },

        ]
    },

      tanari:{
        title: 'Secondfloor2',
        image: '../pictures/large/corridor/I_szarny/_MG_9746.jpg',
        points: [
            { name: 'Termek', x: 22, y: 55, target: 'I204' },
            { name: 'Vissza', x: 50, y: 55, target: 'secondfloor1' },

        ]
    },

    I204:{
        title: 'Termek',
        image: '../pictures/large/corridor/I_szarny/_MG_9744.jpg',
        points: [
            { name: 'I204', x: 35, y: 55, target: 'I204' },
            { name: 'További termek', x: 53, y: 60.5, target: 'I203' },
            { name: 'Vissza a lépcső tetejére!', x: 50, y: 70, target: 'secondfloor2' }

        ]
    },


       I203:{
        title: 'Termek',
        image: '../pictures/large/corridor/I_szarny/_MG_9743.jpg',
        points: [
            { name: 'I204', x: 35, y: 55, target: 'I204' },
            { name: 'I203', x: 45, y: 48, target: 'I203' },
            { name: 'I202', x: 53, y: 60.5, target: 'I202' },
            { name: 'Vissza', x: 50, y: 70, target: 'I204' }

        ]
    },

       I202:{
        title: 'Termek',
        image: '../pictures/large/corridor/I_szarny/_MG_9739.jpg',
        points: [
            { name: 'folyosó', x: 35, y: 55, target: 'folyoso' },
            { name: 'I202', x: 53, y: 60.5, target: 'I202' },
            { name: 'Vissza', x: 50, y: 70, target: 'secondfloor2' }

        ]
    },

       folyoso:{
        title: 'Termek',
        image: '../pictures/large/corridor/I_szarny/_MG_9740.jpg',
        points: [
            { name: 'folyosó', x: 35, y: 55, target: 'secondfloor2' },

        ]
    },
    
    tanari:{
        title: 'Info Tanari',
        image: '../pictures/large/corridor/I_szarny/_MG_9746.jpg',
        points: [
            { name: 'Vissza a lépcső tetejére!', x: 10, y: 55, target: 'secondfloor2' },

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

