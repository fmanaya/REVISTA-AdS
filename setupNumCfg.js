

function Articulo(t, a, i, p) {
    this.titulo = t;
    this.autor = a;
    this.imagenes = i;
    this.partials = p;
};



/* fin config 
plantillas
Articulo(
"Saluda",
"Pilara Piedrafita Acín",
[{ t: 'Titulo', cp: '' }]
))

Articulo(
"Noticias",
"AdS",
null,
[
    {
        t: '',
        img: [
            { t: '', cp: '' }
        ]
    }
]
)
*/

var indice = [];
indice.push(new Articulo(
    "Saluda",
    "Pilara Piedrafita Acín"
));
indice.push(new Articulo(
    "La placa de los Caídos. Sabiñánigo, 1940-1980",
    "Leonardo Puértolas Coli", [{
        t: 'Iglesia de Cristo Rey original de 1929. Sabiñánigo 1955',
        cp: ''
    }, {
            t: 'Diario de operaciones de la Falange de Sabiñánigo',
            cp: ''
        }, {
            t: 'Escuela de D. José Latorre, 1955-56',
            cp: ''
        }, {
            t: 'Carrera ciclista y local de Sindicatos, años 50',
            cp: ''
        }, {
            t: 'Placa en viviendas del Grupo Bilbao (1954)',
            cp: ''
        }, {
            t: 'Mostrador de la Fonda de la Estación',
            cp: ''
        }, {
            t: 'Heraldo',
            cp: ''
        }, {
            t: 'Cementerio republicano en el Molino Escartín',
            cp: ''
        }, {
            t: 'Placa de los Caídos. Barbastro, iglesia de San Francisco',
            cp: ''
        }]
));

indice.push(new Articulo(
    "Dos curiosos contratos en el Pirineo tradicional",
    "José Ángel Gracia Pardo", [{
        t: 'Casbas de Jaca. 1958',
        cp: ''
    }, {
            t: 'Hasta principios del siglo xix el lobo merodeaba los poblados',
            cp: ''
        }]
));


indice.push(new Articulo(
    "Puentes romanos y medievales",
    "Aurelio Viñas Escuer", [{
        t: 'Puente de Anzánigo',
        cp: 'SIPCA'
    }, {
            t: 'Puente de La Gorgocha, sumergido casi permanentemente',
            cp: ''
        }]
));
indice.push(new Articulo(
    "Don Ángel y el pueblo redimido (II)",
    "Enrique Satué Oliván", [{
        t: 'Dique de cierre original construido hacia 1920.',
        cp: 'Foto: Archivo cartagra'
    }, {
            t: 'Proyecto de la Sexta División Hidrográfico-Forestal para el nuevo núcleo de Escuer y el vivero, en el cono de deyección del barranco.',
            cp: 'Foto: Archivo cartagra'
        }, {
            t: '',
            cp: ''
        }, {
            t: 'Escuela de Escuer, hoy centro social',
            cp: ''
        }]
));
indice.push(new Articulo(
    "Serrablo, la comarca de los prodigios",
    "Michel Ortiz", [{
        t: 'Cartel',
        cp: ''
    }, {
            t: '',
            cp: ''
        }, {
            t: '',
            cp: ''
        }, {
            t: '',
            cp: ''
        }, {
            t: '',
            cp: ''
        }]
));
indice.push(new Articulo(
    "La restauración del molino de Ainielle",
    "Enrique Satué Oliván", [{
        t: 'Obras de restauración del molino de Ainielle. Noviembre de 2015',
        cp: 'Fotografía: Carlos Tarazona'
    }, {
            t: 'Eduardo de la Cruz y Julio Llamazares en la realización del documental sobre la memoria amarilla. 16 de noviembre de 2012',
            cp: ''
        }, {
            t: '',
            cp: ''
        }, {
            t: 'Juego de molino, o alquerque, grabado en Ainielle en el suelo, en una vieja rueda',
            cp: ''
        }, {
            t: '',
            cp: ''
        }, {
            t: 'Interior del molino de Ainielle antes de la restauración',
            cp: ''
        }]));
indice.push(new Articulo(
    "Memoria Amigos de Serrablo 2015",
    ""
));
indice.push(new Articulo(
    "Estado de cuentas de la Asociación Amigos de Serrablo",
    ""
));
indice.push(new Articulo(
    "Noticias Amigos de Serrablo",
    "", [], [{
        t: 'NUEvA EDICIÓN DE DIvERSAbI',
        img: []
    }, {
            t: 'CÓMIC SObRE LAS IGLESIAS DE SERRAbLO',
            img: [{
                t: 'Detalle del comic',
                cp: ''
            }]
        }, {
            t: 'CONSEJO DEL TURISMO DE ARAGÓN',
            img: [{
                t: 'Amigos de Serrablo en el Consejod de Turismo de Aragón',
                cp: ''
            }]
        }, {
            t: 'TRANSPARENCIA EN LA GESTIÓN',
            img: []
        }]
));
indice.push(new Articulo(
    "Noticias Museo de Dibujo Julio Gavín- Castillo de Larrés",
    "Alfredo Gavín", [], [{
        t: 'EXPOSICIÓN DE DIbUJOS DE PACO LAFARGA',
        img: [{
            t: '',
            cp: ''
        }]
    }, {
            t: 'CÓMIC CLÁSICO EN LA SALA DE ARTE DE SAbIñÁNIGO',
            img: []
        }, {
            t: 'CALENDARIO DE DESNUDOS POR EL 30 ANIvERSARIO DEL MUSEO',
            img: []
        }, {
            t: 'vISITAS GUIADAS NOCTURNAS',
            img: []
        }, {
            t: '“MUJER CON MANTILLA”, EN MADRID',
            img: []
        }

    ]
));
indice.push(new Articulo(
    "Noticias Museo Ángel Orensanz y Artes de Serrablo",
    "Begoña Subías Pérez", [], [{
        t: 'EDICIÓN NÚMERO XXv DE LAS bEILADAS',
        img: [{
            t: 'Imagen de la segunda beilada impartida por Daniel Gómez',
            cp: ''
        }]
    }, {
            t: 'ORENSANZ DISTINGUIDO POR UNA ORDEN bRITÁNICA',
            img: []
        }, {
            t: '“CLAMO-HOMENAJE A LA TRASHUMANCIA”, GANADORA DEL XvI PREMIO INTERNACIONAL DE ESCULTURA “ÁNGEL ORENSANZ”',
            img: [{
                t: '“Clamo-Homenaje a la trashumancia”',
                cp: ''
            }]
        }, {
            t: 'II CONCURSO ESCOLAR DE DIbUJO-INvESTIGACIÓN',
            img: [{
                t: 'Dibujo ganador 6.º de Primaria del Colegio Montecorona',
                cp: ''
            }]
        }, {
            t: 'HOGUERAS DE SAN SEbASTIÁN',
            img: []
        }, {
            t: 'DESCUbIERTOS UNOS MURALES DE ORENSANZ PINTADOS HACE MÁS DE 20 AñOS',
            img: []
        }]
));
indice.push(new Articulo(
    "Serrablitos",
    "", [{
        t: '',
        cp: ''
    }, {
            t: '',
            cp: ''
        }, {
            t: '',
            cp: ''
        }, {
            t: '',
            cp: ''
        }, {
            t: '',
            cp: ''
        }, {
            t: '',
            cp: ''
        }]
));

module.exports = indice