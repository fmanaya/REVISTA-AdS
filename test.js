
var util = require('util'),
    replace = require('replace');

var DIR = 'out/s171';

//procesada imagen:[] [class="imagen cent" width="500" height="500" alt="" title="" copyright="">] a pertir de 


var img = {
    dpname : 'out/img/srbl171/dp/s171a12i1.thumb_default_w500h500q96.jpg',
    name : 'out/img/srbl171/dpOut/s171a12i1.jpg',
    w : 395,
    h : 500
}


        
var pathOld = img.dpname.split("/");        
var fileOld = pathOld[4].split("."); 
var art =   fileOld[0].match(/\d+/g)[1];    
var htmlfile = DIR + '/art-' + art + '.html';

//var match = input.match(/^.*-mr(\d+)$/);

//if (match) { // check if the input string matched the pattern
//	return match[1]; // get the capturing group
//}


var pathNew = img.name.split("/");        

console.log(htmlfile);
console.log(pathOld[0]);
console.log(pathOld[4]);

console.log(fileOld[0]);
console.log(fileOld[1]);
console.log(fileOld[2]);
console.log('----------------------------');


var thumbDP =  "/img\\" + pathOld[2] + "/" + pathOld[4]; //srbl171/s171a9i1.thumb_default_w600h800q96.jpg" ;
var imgDP =  "src=\""  + thumbDP + "\"";

var imgNew = util.format('src="/img/%s/%s" class="imagen izqu" width="%d" height="%d" ', pathOld[2], pathNew[4], img.w, img.h);


console.log(imgDP);
console.log(imgNew);


 // Ahora lo cambio en el html generado
        // BUSCO: 
        // procesada imagen:[out/img/srbl171/dpOut/s171a2i1.jpg] [class="imagen cent" width="600" height="224" alt="" title="" copyright="">] a partir de out/img/srbl171/dp/s171a2i1.thumb_default_w600h600q96.jpg
   // <p><img src="/img\srbl171/s171a12i1.thumb_default_w500h500q96.jpg" a
        replace({
		    regex: 'img\\\\srbl171/s171a12i1.thumb_default_w500h500q96.jpg',
		    replacement: 'img/xxx/s171a12i1.jpg',
		    paths: ['out/s171/art-12.html'],            
		    recursive: false,
		    silent: false
		});


    
        replace({
		    regex: 'src="/img\\\\srbl171/s171a9i1.thumb_default_w600h800q96.jpg"',
		    replacement: 'src="/img/srbl171/s171a9i1.jpg" class="imagen izqu" width="44444" height="33333"',
//		    replacement: 'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
		    paths: ['out/s171/art-9.html'],            
		    recursive: false,
		    silent: false
		});

/*
        replace({
		    regex: imgDP,   		//src="/img\srbl171/s171a9i1.thumb_default_w600h800q96.jpg" 
		    replacement: imgNew,		//src="/img\srbl171/s171a9i1.jpg" class="" width="" height="" 
		    paths: [htmlfile],           // 
		    recursive: false,
		    silent: true,
		});
  */       