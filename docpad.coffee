# DocPad Configuration File
# http://docpad.org/docs/config

#ver https://github.com/maximilianschmitt/docpad-plugin-shortcodeparser
srblSCodes = [ {
  tag: 'sc'
  cb: (buf, opts, templateData) ->
    '<span class="smallcaps">' + buf + '</span>'
} ]


# Define the DocPad Configuration
docpadConfig = {

	ignoreCustomPatterns: /.kk/
	ignoreCustomPatternsKK: /s999/

	# =================================
	# DocPad Events

	# Here we can define handlers for events that DocPad fires
	# You can find a full listing of events on the DocPad Wiki

	events:
		#conextualizeBefore
		renderX: (opts) ->
			# Prepare
			{inExtension,outExtension,templateData,file,content} = opts
			docpad = @docpad
			# Render if applicable
			if file.meta.numrev == 999 
				docpad.log 'renderxxxxxxxxxxxx ' +  opts.templateData.document.basename + " -- " +JSON.stringify(file.meta)
			opts.content = content

#			if inExtension in ['eco'] and outExtension in ['md']
#				#docpad.log 'render ======================='
#				#docpad.log 'render ' +  JSON.stringify(opts.templateData.document.basename)
#				#docpad.log 'render ======================='
#				opts.content = content          #.toUpperCase() # your conversion to be saved

		render: (opts) ->
			# Prepare
			{inExtension,outExtension,templateData,file,content} = opts
			docpad = @docpad

			# Render if applicable
			if inExtension in ['md'] and outExtension in ['html']
				#opts.content = content.toUpperCase() # your conversion to be saved


				srblTranslator =
					'Museo de Dibujo Julio Gavín-Castillo de Larrés'	: '<a href="/museodibujo">Museo de Dibujo Julio Gavín-Castillo de Larrés</a>',
					'Museo de Dibujo “Julio Gavín-Castillo de Larrés”'	: '<a href="/museodibujo">Museo de Dibujo Julio Gavín-Castillo de Larrés</a>',
					'Museo de Dibujo "Julio Gavín-Castillo de Larrés"'	: '<a href="/museodibujo">Museo de Dibujo Julio Gavín-Castillo de Larrés</a>',
					'Museo “Ángel Orensanz y Artes de Serrablo”'		: '<a href="/museoetnologico">Museo Ángel Orensanz y Artes de Serrablo</a>',
					'Museo Ángel Orensanz y Artes de Serrablo'			: '<a href="/museoetnologico">Museo Ángel Orensanz y Artes de Serrablo</a>',
					'Fundación “Ángel Orensanz”' 						: '<a href="http://www.orensanz.org">Fundación “Ángel Orensanz”</a>',
					'Comarca Alto Gállego'								: '<a href="http://www.comarcaaltogallego.es">Comarca Alto Gállego</a>',
					'Comarca de la Jacetania'							: '<a href="http://www.jacetania.es">Comarca de la Jacetania</a>',
					'Gobierno de Aragón'								: '<a href="http://www.aragon.es">Gobierno de Aragón</a>',
					'Ayuntamiento de Sabiñánigo'						: '<a href="http://www.sabiñanigo.es">Ayuntamiento de Sabiñánigo</a>',
					'Instituto de Estudios Altoaragoneses'				: '<a href="http://www.iea.es">Instituto de Estudios Altoaragoneses</a>',
					'Obra Social de Ibercaja'							: '<a href="http://obrasocial.ibercaja.es">Obra Social de Ibercaja</a>',
					'Asociación Fotográfica de Sabiñánigo' 				: '<a href="http://www.afsabi.com">Asociación Fotográfica de Sabiñánigo</a>',
					'Asociación Cultural “O Zoque”'                     : '<a href="http://www.ozoque.com">Asociación Cultural “O Zoque”</a>',
					'Asociación O Zoque' 								: '<a href="http://www.ozoque.com">Asociación O Zoque</a>',
					'O Zoque' 								            : '<a href="http://www.ozoque.com">O Zoque</a>',
					'Asociación Sancho Ramírez' 						: '<a href="http://www.asociacionsanchoramirez.com">Asociación Sancho Ramírez</a>',
					'Museo de Miniaturas militares de la Ciudadela' 	: '<a href="http://www.museominiaturasjaca.es">Museo de Miniaturas militares de la Ciudadela</a>',
					'Museo de Miniaturas Militares de la Ciudadela' 	: '<a href="http://www.museominiaturasjaca.es">Museo de Miniaturas militares de la Ciudadela</a>',
					'Museo de Miniaturas Militares-Ciudadela de Jaca' 	: '<a href="http://www.museominiaturasjaca.es">Museo de Miniaturas militares de la Ciudadela</a>',					
					'Museo Diocesano de Jaca' 							: '<a href="http://www.diocesisdejaca.org/index.php/museo-diocesano-de-jaca">Museo Diocesano de Jaca</a>',
					'Museo Diocesano de Arte Románico de Jaca' 			: '<a href="http://www.diocesisdejaca.org/index.php/museo-diocesano-de-jaca">Museo Diocesano de Arte Románico de Jaca</a>',
					'Museo Diocesano' 							        : '<a href="http://www.diocesisdejaca.org/index.php/museo-diocesano-de-jaca">Museo Diocesano</a>',

					'Hardcore History'									: 'http://www.dancarlin.com/disp.php/hh'

				texto = content
				for key, value of srblTranslator
	#				texto = texto.replace /#{key}/g, #{value}   #   "My favorite muppet is #{muppet}!"
					re = new RegExp('[^>]'+key, "gm");  # no al principio de la linea
					texto = texto.replace(re, ' '+value);
					#docpad.log key
				#opts.content = texto

				# Otras cosas, abreviaturas, romanos small-caps ...	
				#re = /\b(I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV|XVI|XVII|XVIII|XIX|XX|XXI)\b/g;
				#texto = texto.replace(re, "<span class=\"smallcaps\">$1</span>")
				
				

				#re = new RegExp(' ([A-Z]+) ', 'g')
				#texto = texto.replace(re, " <span class=\"smallcaps\">$1</span> ")

				#re = /\(([A-Z]+)\)/g
				#opts.content = texto.replace(re, "(<span class=\"smallcaps\">$1</span>)")

				#opts.content = texto.replace(/([A-Z]{2,6})/g, "(<span class=\"smallcaps\">$1</span>)")			

				opts.content = texto

		
	collections:
		# obsoletos
		s167: ->
			micol = @getCollection("html").findAllLive({isPage:true, numrev:167} )
			micol.comparator = (doc) ->  parseInt(doc.get("numArticulo"), 10)                           
			micol.sort()
			micol
		s168: ->
			micol = @getCollection("html").findAllLive({isPage:true, numrev:168} )
			micol.comparator = (doc) ->  parseInt(doc.get("numArticulo"), 10)
			micol.sort()
			micol
		s169: ->
			micol = @getCollection("html").findAllLive({isPage:true, numrev:169} )
			micol.comparator = (doc) ->  parseInt(doc.get("numArticulo"), 10)
			micol.sort()
			micol
 		s170: ->
			micol = @getCollection("html").findAllLive({isPage:true, numrev:170} )
			micol.comparator = (doc) ->  parseInt(doc.get("numArticulo"), 10)
			micol.sort()
			micol
 		s171: ->
			micol = @getCollection("html").findAllLive({isPage:true, numrev:171} )
			micol.comparator = (doc) ->  parseInt(doc.get("numArticulo"), 10)
			micol.sort()
			micol
 		s172: ->
			micol = @getCollection("html").findAllLive({isPage:true, numrev:172} )
			micol.comparator = (doc) ->  parseInt(doc.get("numArticulo"), 10)
			micol.sort()
			micol
	 
	templateData:		
		getSorted: (rev) ->
			micol = @getCollection("html").findAllLive({isPage:true, numrev: rev} ).on('add', (document) ->
				document.setMetaDefaults(standalone: true)   # referencesOthers: false
			)

			micol.comparator = (a1, a2) ->  parseInt(a1.get("numArticulo"), 10) - parseInt(a2.get("numArticulo"), 10)
			micol.sort()
			micol
		
		site:
			title: "Revista"
		styles: [+
			"/styles/style.css"
			]

		currentNum: 173
		setCurrentNum: (x)->
			console.log(x)
			currentNum = x
		getCurrentNum: ->
			currentNum

		# buscar plugin que haga esto, seguro lo hay	https://github.com/dodo/node-slug
		getUrl: -> 
			weburl = @document.title.toLowerCase()
			weburl = weburl.replace /(\sy\s)/g, " "
			weburl = weburl.replace /(\sa\s)/g, " "
			
			weburl = weburl.replace /(\sde\s)/g, " "
			weburl = weburl.replace /(\sla\s)/g, " "
			weburl = weburl.replace /(\slos\s)/g, " "
			
			
			weburl = weburl.replace /\"|:|,|\.|\(|\)/g, ""
			weburl = weburl.replace /á/g, "a"
			weburl = weburl.replace /é/g, "e"
			weburl = weburl.replace /í/g, "i"
			weburl = weburl.replace /ó/g, "o"
			weburl = weburl.replace /ú/g, "u"
			weburl = weburl.replace /\s/g, "-"
#			weburl = weburl.replace /\./g, ""
			"<pre>revista/" + @document.numrev + "/" + weburl + "</pre>" 
		getUrl2: (t) -> 
			# "/revista/167/" + @t.toLowerCase()
			weburl = @t.toLowerCase()
			weburl = weburl.replace /\s/g, "-"
			weburl = weburl.replace /\./g, ""
			weburl = weburl.replace /á/g, "a"
			weburl = weburl.replace /ó/g, "o"
			"<pre>/revista/167/" + weburl + "</pre>"

	plugins:
		adspre:
			debug: false
			codes: srblSCodes
	
		thumbnails:
			extensions: ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG', 'gif', 'GIF','tif', 'TIF']
#			imageMagick: true		
# 				default:		w: 150, h: 150, q: 85
# 				tiny-square: 	w: 50, 	h: 50
# 				small-square: 	w: 150, h: 150
# 				medium-square: 	w: 300, h: 300
# 				large-square: 	w: 500, h: 500
# 				tiny-wide: 		w: 88, 	h: 50
# 				small-wide: 	w: 266, h: 150
# 				medium-wide: 	w: 533, h: 300
# 				large-wide: 	w: 888, h: 500
#               largeV: para fotos verticales largexlarge 
#
#				Manual <img src="<%= @getThumbnail("images/image1.jpg", { w: 100, h: 100 }) %>"  alt="my image">			
			presets:
				'default':
					w: 200
					h: 200
					q: 96
				'small':
					w: 200
					h: 200
				'medium':
					w: 300
					h: 300
				'large-sq':   
 					w: 400
					h: 400
				'large':
					w: 500
					h: 500			
				'very-large':
					w: 600
					h: 600		
				'very-large-wide':
					w: 800
					h: 600		
				'very-large-portrait':
					w: 600
					h: 800		

				'very-large-phi':
					w: 972
					h: 972
				'very-large-phi-w':
					w: 972
					h: 601		
				'very-large-phi-p':
					w: 601
					h: 972

				'large-phi':
					w: 601        # predomina
					h: 601		  # predomina
				'large-phi-w':
					w: 601
					h: 371	      # predomina	
				'large-phi-p':
					w: 371        # predomina
					h: 601

				'medium-phi':
					w: 371
					h: 371		
				'medium-phi-w':
					w: 371
					h: 229		
				'medium-phi-p':
					w: 229
					h: 371		

				'small-phi':
					w: 229
					h: 229		
				'small-phi-w':
					w: 229
					h: 71		
				'small-phi-p':
					w: 71
					h: 229		
		stylus:
			stylusLibraries:
				nib: true
			stylusOptions:
				compress: true
				'include css': true
		associatedfiles:
			# The paths for the associated files.
			# associatedFilesPath: 'associated-files'

			# Whether to use relative base paths for the document. This would
			# use associated-files/subfolder/myarticle/image.jpg instead of
			# associated-files/myarticle/image.jpg.
			useRelativeBase: true
}

# Export the DocPad Configuration
module.exports = docpadConfig