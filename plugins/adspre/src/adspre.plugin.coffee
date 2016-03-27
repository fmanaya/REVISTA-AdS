# Export Plugin
module.exports = (BasePlugin) ->
	shortcode = require('shortcode-parser');
	# Define Plugin
	class adspre extends BasePlugin
		# Plugin name
		name: 'adspre'

		config:
			codes: [],
			debug: false

		# {nombre:"s999a1i10.jpg", modo:"very-large-phi", titulo:"very-large-phi", cp:""}
		# <img src="<%= @getThumbnail("img/srbl999/s999a1i10.jpg", 'very-large-phi') %>" alt="" title="very-large-phi" copyright="">

# <figure>
#   <img src="pic_mountain.jpg" alt="The Pulpit Rock" width="304" height="228">
#   <figcaption>Fig1. - The Pulpit Rock, Norway.</figcaption>
# </figure>

		generarThumbnail: (img, numeroRevista) ->
			#if @config.debug
			#	console.log img.nombre
			#	console.log img.modo
			#	console.log img.titulo
			#	console.log img.cp
			tn = "img/srbl#{numeroRevista}/#{img.nombre}"
			#muppet = "Beeker"
			#return "My favorite muppet is #{muppet}!"
			tag = "<img id=\"#{img.nombre}\" src=\"<%= @getThumbnail(\"#{tn}\", \"#{img.modo}\") %>\" alt=\"#{img.titulo}. #{img.cp}\" title=\"#{img.titulo}\" copyright=\"#{img.cp}\">"
			#console.log tag
			return tag

		# Render
		# Called per document, for each extension conversion. Used to render one extension to another.
		render: (opts, next) ->
			# Prepare
			plugin = @
			{inExtension, outExtension, file, content} = opts

			# Upper case the text document's content if it is using the convention txt.(uc|uppercase)
			if inExtension in ['srbl'] and outExtension in ['eco','md',null]
				if plugin.config.debug
					console.log '\nrender ADSPRE ======:' +  file.get('title') 
					console.log '\n               codes:' +  plugin.config.codes.length 
				# Render synchronously
				imagenes = file.get('img')
				#console.log file.get('img');
				texto = content
				if imagenes
					imagenes.forEach (img, index, imagenes) ->
						#if index == 0
						#	console.log 'arr == array: ' + (arr == array)
						imgtag = plugin.generarThumbnail(img, file.get('numrev'))
						if plugin.config.debug
							console.log index + ': ' + img.nombre
							console.log imgtag
						#re = /(@s[1-9]+a([0-9]+)i([0-9]+)\.(jpg|png))/g; 
						#re = new RegExp('[^>]@'+img.nombre, "g")
						#texto = texto.replace(re, imgtag)
						strRe = "(@#{img.nombre})"
						re=new RegExp(strRe,"g")
						texto=texto.replace(re, imgtag)

				#opts.content = opts.content.toUpperCase()

				#shortcodes
				plugin.config.codes.forEach (code, index, codes) ->
					shortcode.add(code.tag, code.cb)
				texto = shortcode.parse(texto, opts.templateData)
				opts.content = texto
			
			# Done
			return next()
