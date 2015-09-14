/**
 *  
 */


var fs = require('fs'),
    //http://blog.modulus.io/nodejs-scripts
    gm = require('gm'),
    replace = require('replace'),
    util = require('util');

/*
out/img/srbl171/dp
out/img/srbl171/dpOut
out/s171
console.log(process.argv[2]);   origen imagenes
console.log(process.argv[3]);   destino imagenes
console.log(process.argv[4]);    
*/

function FImg(anterior, nuevo, w, h) {
    this.dpname = anterior;
    this.name = nuevo;
    this.w = w;
    this.h = h;
}

function processImage(f, callback) {
    var img = gm(f.name);

    var width, height;
    img.size(function(err, val) {
        f.w = val.width;
        f.h = val.height;
        callback(f, err);
    });
};

//var log = fs.createWriteStream('imgs.txt', {'flags': 'w'});
var log = fs.openSync('imgs.txt', 'w');

var search = function(dirOrigen, dirDestino, dirHtml, cb) {
    if (!fs.existsSync(dirOrigen)) {
        return console.log('Directory ' + dirOrigen + ' does not exist.');
    }

    var path, stats;
    fs.readdir(dirOrigen, function(err, files) {
        var imagenes = [];
        if (err) throw err;

        var thumbs = files.filter(function(val) {
            return val.indexOf(".thumb_") != -1;
        });

        for (var s = 0; s < thumbs.length; s++) {
            path = dirOrigen + '/' + thumbs[s];
            var f = thumbs[s].split(".");
            console.log('stats: ' + JSON.stringify(f));
            //s167a4i1.thumb_default_w500h500q96.jpg
            //\out\s167\art-4.html
            //            newimg = dirOrigen + '/web/' + thumbs[s];
            //            newimg = dirOrigen + '/web/' + f[0] + "."+ f[2];
            newimg = dirDestino + '/' + f[0] + "." + f[2];



            if (!fs.statSync(path).isDirectory()) {
            	//copio out/img/srbl171/dp/s171a10i1.thumb_default_w300h300q96.jpg en out/img/srbl171/dpOut/s171a10i1.jpg
                console.log('copio %s en %s', path, newimg);
                //				fs.createReadStream(path).pipe(fs.createWriteStream(newimg));
                fs.writeFileSync(newimg, fs.readFileSync(path));
                //var dimensions = sizeOf(newimg);

                imagenes.push(new FImg(path, newimg, 0, 0));
                // obtain the size of an image 
                // http://stackoverflow.com/questions/19650097/nodejs-gm-getting-image-size-synchronously

                console.log('fin copio %s', path);

            }
        }
        console.log('tras fin for');

        cb(imagenes);
    });

};

function dimensiones(el, index, array) {
    console.log("procesando imagen %d:[%s] ", index, el.name);
    processImage(el, function(f, err) {
        console.log("procesada imagen:[%s] [class=\"imagen cent\" width=\"%s\" height=\"%s\" alt=\"\" title=\"\" copyright=\"\">] a pertir de %s", f.name, f.w, f.h, f.dpname);
                   //procesada imagen:[out/img/srbl171/dpOut/s171a5i7.jpg] [class="imagen cent" width="395" height="500" alt="" title="" copyright="">] a pertir de out/img/srbl171/dp/s171a5i7.thumb_default_w500h500q96.jpg
        //		log.write("imagen ["+el.name+"] con dimensiones:[width=\""+el.w+"\" height=\""+el.h+"\"]");
        //fs.writeSync(log, "imagen ["+el.name+"] con dimensiones:[width=\""+el.w+"\" height=\""+el.h+"\"]")

        // Ahora lo cambio en el html generado
        /*
        replace({
		    regex: "string to be replaced",   		//src="/img\srbl171/s171a9i1.thumb_default_w600h800q96.jpg" 
		    replacement: "replacement string",		//src="/img\srbl171/s171a9i1.jpg" class="" width="" height="" 
		    paths: ['path/to/your/file'],           //
		    recursive: false,
		    silent: true,
		});
         */
		var pathOld = f.dpname.split("/");        
		var fileOld = pathOld[4].split("."); 
		var art =   fileOld[0].match(/\d+/g)[1];    
		var htmlfile = DIRHTML + '/art-' + art + '.html';
		var pathNew = f.name.split("/"); 

		var thumbDP =  "/img\\\\" + pathOld[2] + "/" + pathOld[4]; //srbl171/s171a9i1.thumb_default_w600h800q96.jpg" ;
		var imgDP =  "src=\""  + thumbDP + "\"";
		var imgNew = util.format('src="/img/%s/%s" class="imagen izqu" width="%d" height="%d" ', pathOld[2], pathNew[4], f.w, f.h);
		console.log('REPLACE,' +
		    ' regex:' + imgDP +  
		    ' replacement:' + imgNew +
		    ' paths:' + htmlfile
		);
		replace({
		    regex: imgDP,   		//src="/img\srbl171/s171a9i1.thumb_default_w600h800q96.jpg" 
		    replacement: imgNew,		//src="/img\srbl171/s171a9i1.jpg" class="" width="" height="" 
		    paths: [htmlfile],           // 
		    recursive: false,
		    silent: false,
		});
        return f;
    });
}



var DIRHTML = process.argv[4];

var gArr = null;

//dirOrigen, dirDestino, dirHtml, cb

search(process.argv[2], process.argv[3], process.argv[4], function(arr) {
    //	console.log('imagenes: ' + JSON.stringify(arr));

    var narr = arr.map(dimensiones);
    gArr = narr;
    console.log('imagenes: ' + JSON.stringify(narr));

    console.log('fin search callback ');
});

/*	
if (narr) {
	for (img in narr) {
		var txt = "imagen ["+img.name+"] con dimensiones:[width=\""+img.w+"\" height=\""+img.h+"\"]";
		console.log(txt);
		fs.writeSync(log, txt)
	}
}	
*/
//log.end();
fs.closeSync(log)
