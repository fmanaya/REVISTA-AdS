function Articulo(t, s, a, i, p) {
    this.titulo = t;
    this.subtitulo = s;
    this.autor = a;
    this.imagenes = i;
    this.partials = p;
};


/*
//plantillas

Articulos simple
Articulo(
    "titulo",
    "_subtitulo_",
    "autor", 
    [{
        t: 'Titulo',
        cp: ''
    }]
));

Articulos de noticias, con apartados
Articulo(
    "Titulo",
    "autor",
    null, 
    [{
        t: '',
        img: [{
            t: '',
            cp: ''
        }]
    }]
);
*/


var indice = [];

indice.push(new Articulo(
    "Saluda", "",
    "AdS"
));


indice.push(new Articulo(
    "Secorún.", "Capital histórica del valle de Serrablo",
    "Leonardo Puértolas Coli", [{
        t: "Secorún ",
        cp: ""
    },{
        t: "Secorún",
        cp: ""
    },{
        t: "Secorún",
        cp: ""
    },{
        t: "Secorún",
        cp: ""
    },{
        t: "Secorún",
        cp: ""
    },{
        t: "Secorún",
        cp: ""
    },{
        t: "Secorún",
        cp: ""
    },{
        t: "Secorún",
        cp: ""
    },{
        t: "Secorún",
        cp: ""
    }]
));

indice.push(new Articulo(
    "Inaugurado el Centro de Interpretación de las Iglesias de Serrablo en Lárrede", "",
    "Comarca Alto Gállego", [{
        t: "",
        cp: ""
    },{
        t: "",
        cp: ""
    },{
        t: "",
        cp: ""
    }]
));

indice.push(new Articulo(
    "Cajal y el desastre colonial", "",
    "Carlos Eduardo de Jesús Sierra Cuartas", [{
        t: "Retrato de 1874 de Cajal como capitán médico en Cuba",
        cp: ""
    },{
        t: "Soldados españoles en Pinar del Río, Cuba",
        cp: ""
    },{
        t: "Caricatura del general Weyler",
        cp: ""
    },{
        t: "Pascual Cervera y Topete",
        cp: ""
    },{
        t: "Crucero acorazado español Reina Mercedes hundido por los españoles un día después de la batalla en la bahía de Santiago de Cuba",
        cp: ""
    },{
        t: "Torre del crucero acorazado español Vizcaya destruida en la batalla de Santiago de Cuba.",
        cp: ""
    }]
));
indice.push(new Articulo(
    "Especies coralinas descritas en el Bartoniense pirenaico suroccidental", "",
    "Guillermo Gómez", [{
        t: "Fig.1 Stylophora binacuaensis. Izqd. descripción original; centro. detalle de pólipos alineados; Dcha Stylophora actual.",
        cp: ""
    },{
        t: "Fig 2. Stylocoenia sanctaorosiae: Izda. descripción original;dcha. ejemplar propio. Género exclusivamente fósil.",
        cp: ""
    },{
        t: "Fig 3. Cyathoseris castroi: izda. descripción original; dcha. plano poliperal y base pedunculada. Género exclusivamente fósil.",
        cp: ""
    },{
        t: "Fig 4. Leptoseris santaciliaensis: izda. descripción original; centro ejemplar fragmentado, detalle, y poliperos madre sobre pedúnculo; dcha. Leptoseris actual.",
        cp: ""
    },{
        t: "Fig 5. Ellipsocoenia bauza. Izda. descripción original; centro. colonia joven pedunculada; dcha. Ellipsocoenia actual.",
        cp: ""
    },{
        t: "Fig 6. Alveopora ataresensis. Izda. descripción original; centro. porcion de colonia, detalle políperos; dcha Alveopora actual.",
        cp: ""
    },{
        t: "Fig 7. Millepora subpirenaica. Izda. descripción original; centro. ejemplar propio; dcha. Millepora actual.",
        cp: ""
    },{
        t: "Fig 8. Izda. Montlivaultia Egozcuei con la descripción original y fotografía actual. Centro arriba Cycloseris sublenticularis (Mallada) izda. la ausencia de epiteca y el botón dorsal, dcha. el recuento de sus 96 septos.",
        cp: ""
    }]
));

indice.push(new Articulo(
    "Memoria Amigos de Serrablo 2016", "",
    "AdS", []
));

indice.push(new Articulo(
    "Estado de cuentas de la Asociación Amigos de Serrablo 2016", "",
    "AdS", []
));


indice.push(new Articulo(
    "Noticias Amigos de Serrablo", "",
    "AdS", 
    null, 
    [{
        t: 'CUMPLEAÑOS EN DIVERSABI',
        img: [{
            t: 'Momento en Diversabi',
            cp: ''
        }]
    }, {
        t: 'GRACIAS, VALE LA PENA'
    }, {
        t: 'AMIGOS DE SERRABLO Y LOS CENTROS ESCOLARES'
    }, {
        t: 'CENTRO DE INTERPRETACIÓN DE LAS IGLESIAS DE SERRABLO EN LÁRREDE',
        img: [{
            t: 'Lárrede',
            cp: ''
        }]
    }]
));








indice.push(new Articulo(
    "Noticias Museo de Dibujo Julio Gavín-Castillo de Larrés", "",
    "AdS", 
    null, 
    [{
        t: 'CONVENIO MARCO CON LA UNIVERSIDAD DE BARCELONA'
    }, {
        t: 'RESIDENCIA ESTUDIANTE UNIVERSIDAD DE BARCELONA'
    }, {
        t: 'SOLICITUD DE PRÉSTAMO',
        img: [{
            t: '“Mausoleo de Joaquín Costa”',
            cp: 'Félix Lafuente'
        }]
    }, {
        t: 'DEPÓSITO CDAN',
        img: [{
            t: 'xxxx',
            cp: ''
        }]
    }, {
        t: 'FONDO MUSEO'
    }, {
        t: 'ESCULTURA PINOCHO',
        img: [{
            t: 'Escultura Pinocho',
            cp: ''
        }]
    }, {
        t: 'DOMUS'
    }]
));


indice.push(new Articulo(
    "Noticias Museo Ángel Orensanz y Artes de Serrablo", "",
    "Begoña Subías Pérez",
    null, 
    [{
        t: 'UN NUEVO MUSEO DE ORENSANZ'
    }, {
        t: 'EL BELÉN DEL MUSEO',
        img: [{
            t: 'La clase de 6.º de Primaria',
            cp: ''
        }]
    }, {
        t: 'EDICIÓN NÚMERO XXVI DE AS BEILADAS',
        img: [{
            t: 'Enrique junto a una de sus informantes: Miguela Sanromán, de Escuer.',
            cp: 'Fotografía: Raúl González'
        }]
    }, {
        t: 'EL AYER Y EL HOY DE LAS  HOGUERAS DE SAN SEBASTIÁN',
        img: [{
            t: 'Las hogueras de San Sebastián.',
            cp: 'Fotografía: Javier Ara'
        }]
    }, {
        t: 'LA CAJA DE MÚSICA, EL OTOÑO Y SUSÍN',
        img: [{
            t: 'Un momento de la presentación.',
            cp: 'Fotografía: Andrés Muñoz'
        }]
    }, {
        t: 'LA TIENDA CRECE',
        img: [{
            t: 'Los nuevos productos de la tienda',
            cp: ''
        }]
    }]));




console.log('AAAAAAAAAAAAAAAAAAAAARTS: ' + indice.length)


exports.indice = indice;