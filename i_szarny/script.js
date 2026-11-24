let Iszarny;

const  getIszarny=async()=>{
    try {
        let response=await fetch("./i_szarny.json");
        if (response.ok) {
            Iszarny = await response.json();
            // console.log(Iszarny);
            General("start");
            
        }
    } catch (error) {
        console.log(error);
        
    }
}


let photo = document.getElementById('photo');
let points = document.getElementById('points');

let helyzet = "start";

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

getIszarny();


