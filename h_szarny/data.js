const mappa = '../pictures/small/corridor/H_szarny/';
const helyszinek = {
    start: {
        title: 'Lépcsőház – alsó szint', image: mappa + '_MG_9725.jpg', szint: 0,
        info: 'A lépcső felfelé a H szárny folyosójához vezet. A másik irányban az átjáró található.',
        points: [{name:'Fel a folyosóra',x:57,y:54,target:'folyoso0'}, {name:'Hátrafordulás',x:48,y:87,target:'eloszoba'}, {name:'Udvari ajtó',x:16,y:58,target:'udvarajto'}]
    },
    eloszoba: {
        title:'Lépcsőház – átjáró', image:mappa+'_MG_9722.jpg', szint:0,
        info:'Üveges ajtóval elválasztott átjáró és tablókkal díszített fal.',
        points:[{name:'Átjáró',x:69,y:56,target:'atjaro'}, {name:'Vissza a lépcsőhöz',x:50,y:88,target:'start'}]
    },
    udvarajto: {
        title:'Üveges udvari ajtó', image:mappa+'_MG_9723.jpg', szint:0,
        info:'Az üveges ajtón át az udvar látható. A külső terület külön projektfeladat.',
        points:[{name:'Vissza',x:50,y:87,target:'start'}]
    },
    folyoso0: {
        title:'Folyosó – az ajtók felé', image:mappa+'_MG_9718.jpg', szint:0,
        info:'Sárga ajtókkal, padokkal és tablókkal ellátott folyosó. A túloldali nézetből a lépcsőház látható.',
        points:[{name:'Megfordulás',x:50,y:86,target:'lepcso1'}]
    },
    lepcso1: {
        title:'Folyosó – lépcső felé', image:mappa+'_MG_9719.jpg', szint:0,
        info:'A felvételen a felfelé vezető lépcső és a lefelé vezető lépcsőág látható.',
        points:[{name:'I. emelet',x:56,y:54,target:'h101'},{name:'Alsó lépcsőház',x:44,y:60,target:'start'},{name:'Megfordulás',x:50,y:89,target:'folyoso0'}]
    },
    h101: {
        title:'H101', image:mappa+'_MG_9717.jpg', szint:1,
        info:'A H101 számmal jelölt fehér ajtó az első emeleti lépcső közelében.',
        points:[{name:'H102',x:11,y:53,target:'h102'},{name:'Lépcső fel',x:49,y:85,target:'lepcso2'},{name:'Lépcső le',x:27,y:85,target:'lepcso1'}]
    },
    h102: {
        title:'H102 – szakmai előadó', image:mappa+'_MG_9716.jpg', szint:1,
        info:'A H102 szakmai előadó bejárata. A felvétel a terem ajtaját mutatja.',
        points:[{name:'H101 felé',x:50,y:86,target:'h101'}]
    },
    lepcso2: {
        title:'Lépcső a II. emeletre', image:mappa+'_MG_9715.jpg', szint:1,
        info:'Felfelé vezető lépcső sárga korláttal.',
        points:[{name:'II. emelet',x:59,y:43,target:'emelet2'},{name:'Vissza',x:38,y:88,target:'h101'}]
    },
    emelet2: {
        title:'II. emeleti folyosó', image:mappa+'_MG_9714.jpg', szint:2,
        info:'A folyosó végén a H201 és H202 mosdók, valamint a H203 jelű ajtó található.',
        points:[{name:'H201–H203',x:53,y:54,target:'h201'},{name:'Megfordulás',x:50,y:86,target:'lepcsoLe2'}]
    },
    h201: {
        title:'H201, H202 és H203', image:mappa+'_MG_9712.jpg', szint:2,
        info:'H201 – női WC; H202 – férfi WC; balra a H203 jelű ajtó. A nézet az ajtókat kívülről mutatja.',
        points:[{name:'Vissza a folyosóra',x:50,y:88,target:'emelet2'}]
    },
    lepcsoLe2: {
        title:'II. emelet – lefelé', image:mappa+'_MG_9713.jpg', szint:2,
        info:'A lépcső felső pihenője.',
        points:[{name:'I. emelet',x:43,y:64,target:'lepcso2'},{name:'Megfordulás',x:50,y:88,target:'emelet2'}]
    },
    atjaro: {
        title:'Üveges folyosóajtó', image:mappa+'_MG_9724.jpg', szint:0,
        info:'Az ajtó mögött padokkal ellátott rövid folyosó és lépcső található.',
        points:[{name:'Tovább',x:42,y:60,target:'lepcsoLe0'},{name:'Vissza',x:50,y:88,target:'eloszoba'}]
    },
    lepcsoLe0: {
        title:'Lépcső a szekrényes folyosóhoz', image:mappa+'_MG_9726.jpg', szint:0,
        info:'A rövid lépcsősor a kockás padlójú szekrényes folyosóra vezet.',
        points:[{name:'Szekrényes folyosó',x:48,y:67,target:'szekrenyes'},{name:'Megfordulás',x:50,y:89,target:'atjaroVissza'}]
    },
    atjaroVissza: {
        title:'Átjáró – visszafelé', image:mappa+'_MG_9727.jpg', szint:0,
        info:'A padok mellett vissza lehet jutni az üveges ajtóhoz.',
        points:[{name:'Lépcsőház',x:52,y:57,target:'eloszoba'},{name:'Megfordulás',x:50,y:89,target:'lepcsoLe0'}]
    },
    szekrenyes: {
        title:'Szekrényes folyosó', image:mappa+'_MG_9728.jpg', szint:0,
        info:'Tanulói szekrények, padok és tablók találhatók a folyosón.',
        points:[{name:'Folyosó vége',x:50,y:55,target:'h002'},{name:'Megfordulás',x:50,y:87,target:'szekrenyesVissza'}]
    },
    h002: {
        title:'H002 – férfi WC', image:mappa+'_MG_9730.jpg', szint:0,
        info:'A H002 férfi WC ajtaja a szekrények mellett található.',
        points:[{name:'Vissza a folyosóra',x:49,y:88,target:'szekrenyesVissza'},{name:'H011 felé',x:80,y:65,target:'h011sarok'}]
    },
    szekrenyesVissza: {
        title:'Szekrényes folyosó – vissza', image:mappa+'_MG_9731.jpg', szint:0,
        info:'A folyosóról a rövid lépcsőn keresztül vissza lehet jutni az átjáróhoz.',
        points:[{name:'Lépcső',x:49,y:52,target:'lepcsoFel0'},{name:'Megfordulás',x:50,y:88,target:'szekrenyes'}]
    },
    lepcsoFel0: {
        title:'Rövid lépcső – felfelé', image:mappa+'_MG_9729.jpg', szint:0,
        info:'A lépcső a padokkal ellátott átjáróhoz vezet.',
        points:[{name:'Átjáró',x:49,y:48,target:'atjaroVissza'},{name:'Vissza',x:50,y:87,target:'szekrenyes'}]
    },
    h011sarok: {
        title:'H011 melletti folyosóvég', image:mappa+'_MG_9732.jpg', szint:0,
        info:'A szekrények mellett a H011 ajtaja látható.',
        points:[{name:'H011',x:87,y:54,target:'h011'},{name:'Átjáró felé',x:30,y:65,target:'feherFolyoso'},{name:'Vissza',x:50,y:88,target:'h002'}]
    },
    h011: {
        title:'H011', image:mappa+'_MG_9733.jpg', szint:0,
        info:'A H011 feliratú, pillangókkal díszített ajtó és a mellette álló szekrények.',
        points:[{name:'Vissza',x:50,y:87,target:'h011sarok'}]
    },
    feherFolyoso: {
        title:'Fehér folyosó', image:mappa+'_MG_9734.jpg', szint:0,
        info:'A fekete-fehér padlós folyosó végén lépcső vezet az F szárny irányába.',
        points:[{name:'Lépcső lefelé',x:48,y:63,target:'f127'},{name:'Megfordulás',x:50,y:88,target:'feherVissza'}]
    },
    f127: {
        title:'Átjáró az F127 felé', image:mappa+'_MG_9736.jpg', szint:0,
        info:'A lépcső alján az F127 számmal jelölt ajtó látható. A további épületszárnyat másik csoport készíti.',
        points:[{name:'Vissza felfelé',x:50,y:88,target:'feherLepcso'}]
    },
    feherVissza: {
        title:'Fehér folyosó – vissza', image:mappa+'_MG_9737.jpg', szint:0,
        info:'A rövid lépcső a H szárny szekrényeihez vezet vissza.',
        points:[{name:'H011 felé',x:50,y:54,target:'h011sarok'},{name:'Megfordulás',x:50,y:88,target:'feherFolyoso'}]
    },
    feherLepcso: {
        title:'Átjáró lépcsője – felfelé', image:mappa+'_MG_9738.jpg', szint:0,
        info:'Lépcső a fehér folyosó irányába.',
        points:[{name:'Tovább',x:50,y:47,target:'feherVissza'},{name:'Vissza',x:50,y:88,target:'f127'}]
    }
};