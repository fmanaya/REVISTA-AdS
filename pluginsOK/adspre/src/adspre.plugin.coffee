# una Imagen, viene de Item for Table of Contents.
class Imagen
	constructor: (src, alt) ->
		@src = src
		@alt = alt
	src: ->
		@src or null
	alt: ->
		@alt or null
	title: ->
		@title or null
	width: ->
		@widtht or null
	height: ->
		@height or null


# Export Plugin
module.exports = (BasePlugin) ->
	# Requires
	jsdom = require('jsdom')
       
	# Define Plugin
	class AdsprePlugin extends BasePlugin
 		# Plugin name
		name: 'Adspre'

		# Plugin configuration
		config:
			# Which document extentions to search and generate.
			# For now, only html is supported.
			documentExtensions: ["html"]
			
			# Add missing header id tags for ToC links.
			addHeaderIds: true
			# When adding header ids, use this prefix.
			headerIdPrefix: ''
         
		# Locale
		locale:
			parsingTocHeaders: "Parsing ToC headers: "
			buildingToc: "Building ToC: "

		buildTableofImages: (window, imagenes) ->
			# Prepare
			config = @config
         
			# Setup
			tableofimagenes = []
 
			# Build ToC List
			for value, key in imagenes
				img = imagenes.item(key)
				  
				# Add Item to ToC
				currentImg = new Imagen(img.src, img.alt)
				#currentImg.add(header.innerHTML, header.id)
				tableofimagenes.push currentImg
 
			return tableofimagenes

            
		# Render Before, make sure we have required metadata placeholders
		renderBefore: (opts,next) ->
			# Prepare
			documents = @docpad.getCollection(@config.collectionName or 'documents')
			config = @config
			locale = @locale

			# Cycle through all our documents
			documents.forEach (document) ->
				tableOfImages = document.tableOfImages? or []
				document.set(tableOfImages: tableOfImages)
            
			# All done
			return next()


		# Render the document
		renderDocument: (opts,next) ->
			# Prepare
			{extension,templateData,file,content} = opts
			me = @
			docpad = @docpad
			config = @config
			locale = @locale
			document = templateData.document

			# Handle
			if file.type is 'document' and extension in config.documentExtensions and not document.tocProcessed
				if not config.requireMetadata or document[config.requiredMetadataField]
					document.tocProcessed = true;

					# Log
					docpad.log('debug', locale.parsingTocHeaders+document.name)
               
					# Create DOM from the file content
					jsdom.env(
						html: "<html><body>#{opts.content}</body></html>"
						features:
							QuerySelector: true
						done: (err, window) ->
							# Check
							return next(err)  if err
                     
							# Find headers
							imgs = window.document.querySelectorAll('img')
							
							# Check
							if imgs.length is 0
								return next()
							
							# Log
							docpad.log('debug', locale.buildingToc + document.name)
							
							# Build Table of Contents
							toc = me.buildTableofImages(window, imgs)
							
							# Only if we added header ids, update content.
							if config.addHeaderIds
								opts.content = window.document.body.innerHTML
							
							# Update docment with contents.
							document.tableOfImages = toc;
							
							return next()
					)

				else
					return next()
			else
				return next()

		# ver ejemplo https://github.com/docpad/docpad-plugin-pygments/blob/master/src/pygments.plugin.coffee
#		renderDocument: (opts) ->
#			return


		# Render
		# Called per document, for each extension conversion. Used to render one extension to another.
#		render: (opts) ->
#			# Prepare
#			{inExtension, outExtension, file} = opts
#			# Upper case the text document's content if it is using the convention txt.(uc|uppercase)
#			if inExtension in ['uc','uppercase'] and outExtension in ['txt',null]
#					# Render synchronously
#					opts.content = opts.content.toUpperCase()
#			# Done
#			return
