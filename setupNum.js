/*

setea los ficheros iniciales de un numero de revista. 

Previamenrte completar array indice

node setupNum 172 12
node setupNum 173 10
*/
var fs = require('fs'),
    util = require('util');


/* fin config */

var indice = [];
indice.push(new Articulo(
	"Saluda",
	"Pilara Piedrafita Acín"
));
indice.push(new Articulo(
	"Vida cotidiana en Sabiñánigo a través de los gastos del Concejo",
	"José Ángel Gracia Pardo"
));

indice.push(new Articulo(
	"O dolmen d’As Tallatas en Bentué de Nozito",
	"Óscar Latas Alegre"
));

indice.push(new Articulo(
	"Don Ángel y el pueblo redimido (I)",
	"Enrique Satué Oliván"
));

indice.push(new Articulo(
	"Cajal frente a la pseudociencia: su vigencia",
	"Carlos Eduardo de Jesús Sierra Cuartas"
));

indice.push(new Articulo(
	"Intervención arqueológica en el castillo de Larrés (II)",
	"José Luis Cebolla Berlanga y Francisco Javier Ruiz Ruiz"
));

indice.push(new Articulo(
	"Noticias Amigos de Serrablo",
	"Amigos de Serrablo"
));

indice.push(new Articulo(
	"Noticias Museo de Dibujo Julio Gavín- Castillo de Larrés",
	"Alfredo Gavín"
));

indice.push(new Articulo(
	"Noticias Museo Ángel Orensanz y Artes de Serrablo",
	"Begoña Subías Pérez"
));

indice.push(new Articulo(
	"Serrablitos",
	"Amigos de Serrablo"
));

/* fin config */

function Articulo(t, a) {
        this.titulo = t;
        this.autor = a;
};    

function newArt(n, r, oA) {
	var dir = util.format('src/documents/s%d/', r),
	    fname = util.format('art-%d.html.md.eco', n),
	    fullfilename = dir + fname,
		stream = fs.createWriteStream( fullfilename, { flags: 'wx', encoding: 'utf8' });

	console.log('creo: ' + fullfilename);

	stream.once('open', function(fd) {
		stream.write("---\n");
		stream.write(util.format('title: %s\n', oA.titulo));   //"title: \n");
		stream.write(util.format('autor: %s\n', oA.autor));   //"autor: \n");
		stream.write(util.format('numrev: %d\n', r));   //"numrev: 172\n");
		stream.write("layout: \"default\"\n");
		stream.write("isPage: true\n");
		stream.write(util.format('numArticulo: %d\n', n));
		stream.write("---\n\n");
		stream.write("<%- @getUrl() %>\n");
		stream.end();
	});	
}



var numrevista=process.argv[2];   // 0 y 1 son node y el script js
var numarticulos=process.argv[3];   // TODO, esto obtenerlo del indice[]

console.log(util.format('Voy a generar %s articulos', numarticulos));

for (var i = numarticulos - 1; i >= 0; i--) {
	newArt(i+1, numrevista, indice[i]);
};

console.log('Fin');



/*
		stream.write("---\n");
		stream.write("title: "Editorial"\n");
		stream.write("autor:\n");
		stream.write(util.format('numrev: %d\n', r));   //"numrev: 172\n");
		stream.write("layout: "default"\n");
		stream.write("isPage: true\n");
		stream.write(util.format('numArticulo: %d\n', n));
		stream.write("---\n\n");
		stream.write("<%- @getUrl() %>\n");

*/