var sizeOf = require('image-size');
var fs = require('fs');
//http://blog.modulus.io/nodejs-scripts

var search = function(dir) {
	if (!fs.existsSync(dir)) {
		return console.log('Directory ' + dir + ' does not exist.');
	}

	var haystack = fs.readdirSync(dir), path, stats;

	for (var s = 0; s < haystack.length; s++) {
		path = dir + '/' + haystack[s];
		stats = fs.statSync(path);

		var dimensions = sizeOf(path);
		//console.log(path , dimensions.width, dimensions.height);
		console.log("imagen:[%s] con dimensiones:[width=\"%d\" height=\"%d\"]", path, dimensions.width, dimensions.height);
	}
};

search(process.argv[2]);

