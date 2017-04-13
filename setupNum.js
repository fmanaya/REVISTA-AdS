/*

setea los ficheros iniciales de un numero de revista. 

Previamenrte completar array indice

node setupNum 172 12
node setupNum 173 10
*/
var fs = require('fs'),
    util = require('util'),
    mkdirp = require('mkdirp');
    cfg = require('./setupNumCfg.js');




function newArt(n, r, oA) {
    console.log('trato:' + oA.titulo);
    var dir = util.format('src/documents/s%d/', r),
        fname = util.format('art-%d.html.md.eco', n),
        suffixSrbl = oA.imagenes ? '.srbl' : '',              //verificar esto, o depende de tb de los tags propios [sc][/sc]
        fullfilename = dir + fname + suffixSrbl,
        stream = fs.createWriteStream(fullfilename, {
            flags: 'wx',
            encoding: 'utf8'
        });

    console.log('creo: ' + fullfilename);

    stream.once('open', function(fd) {
        stream.write("---\n");
        stream.write(util.format('title: %s\n', oA.titulo)); //"title: \n");
        stream.write(util.format('subtitle: %s\n', oA.subtitulo)); //"title: \n");
        stream.write(util.format('autor: %s\n', oA.autor)); //"autor: \n");
        stream.write(util.format('numrev: %d\n', r)); //"numrev: 172\n");
        stream.write("layout: \"default\"\n");
        stream.write("isPage: true\n");
        stream.write(util.format('numArticulo: %d\n', n));
        //img:
        //- {nombre:"s173a6i1.jpg", modo:"medium-phi", titulo:"Fig. 1.- Cimentación del muro U.E. 1004.", cp:""}
        if (oA.imagenes) {
            stream.write("img:\n");
            oA.imagenes.forEach(function(img, i) {
                var imgstr = util.format('- {nombre:"s%da%di%d.jpg", modo:"medium-phi", titulo:"%s", cp:"%s"}\n', r, n, i + 1, img.t, img.cp);
                stream.write(imgstr);
            });
        }
        stream.write("---\n\n");
        stream.write("<%- @getUrl() %>\n");
        stream.end();

        //si hay partials
        if (oA.partials) {
            var dir = util.format('src/documents/s%d/includes', r);
            mkdirp.sync(dir);

            oA.partials.forEach(function(p, i) {
                var dir = util.format('src/documents/s%d/includes/a%d', r, n),
                    fname = util.format('/a%d-n%d.html.md', n, i + 1),
                    suffixSrbl = p.img ? '.srbl' : '',
                    fullfileNoticia = dir + fname + suffixSrbl;
                mkdirp.sync(dir);
                var streamNoticia = fs.createWriteStream(fullfileNoticia, {
                    flags: 'wx',
                    encoding: 'utf8'
                });
                streamNoticia.once('open', function(fd) {
                    streamNoticia.write("---\n");
                    streamNoticia.write(util.format('title: %s\n', p.t)); //"title: \n");
                    //img:
                    //- {path:"img/srbl173/s173a9i3.jpg", titulo:"Mural “Artes, Ciencias y Letras”  de Ángel Orensanz", cp:""}
                    if (p.img) {
                        streamNoticia.write("imgs:\n");
                        p.img.forEach(function(img, i) {
                            var imgstr = util.format('- {path:"img/srbl%d/s%da%di%d.jpg", titulo:"%s", cp:"%s"}\n', r, r, n, i + 1, img.t, img.cp);
                            streamNoticia.write(imgstr);
                        });
                    }
                    streamNoticia.write("---\n\n");
                    //streamNoticia.write("<%- @getUrl() %>\n");
                    streamNoticia.end();
                })
            })
        }

    });
}


var numrevista = process.argv[2]; // 0 y 1 son node y el script js
//var numarticulos = process.argv[3]; // TODO, esto obtenerlo del cfg[]
var indexArt = cfg.indice;

console.log('REVISTA: ' + numrevista)
console.log('ARTS: ' + indexArt.length)

console.log(util.format('Voy a generar %d articulos', cfg.length));

//for (var i = numarticulos - 1; i >= 0; i--) {
//	newArt(i+1, numrevista, cfg[i]);
//};

dir = util.format('src/documents/s%d/', numrevista);
fs.existsSync(dir) || fs.mkdirSync(dir);

indexArt.forEach(function(art, i) {
    console.log('%d, %d, art:%s', i + 1, numrevista, art.titulo);
    newArt(i + 1, numrevista, art);
});

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