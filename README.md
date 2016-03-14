# Preprocesador revista Amigos de Serrablo
Usando el fabuloso [DocPad](http://docpad.org), es un preprocesador de los articulos de la [revista Serrablo](http://wwww.serrablo.org/revista) previo a su publicación en la web.
Sustituye a otro *pet-project* realizado en python con el que no estaba muy comodo.

## Herramientas

`setupNum.js`   
Primer paso para abordar un nuevo número de la revista. Generar un directorio con las plantillas de cada fichero.

`imgsz.bat` / `imgszMA.js`  
En el tratamiento docpad, se utiliza el plugin [thumbnails](https://github.com/rantecki/docpad-plugin-thumbnails) para redimensionar imagenes. Pero los nombres de las imagenes se *ensucian* bastante, ademas de no tener referencias a las dimensiones de cada una de ellas. 

```
<img src="/img\srbl172/s172a11i2.thumb_default_w371h371q96.jpg" alt="" title="" copyright="">
```

Con esta herramienta se postprocesa cada fichero html generado para tocar los atributos de las imagenes `src`,  `width` y `height` ya preparados para su despliegue en la web. 

```
<img src="/img/srbl172/s172a11i1.jpg" class="imagen izqu" width="371" height="266"  alt="" title="" copyright="">
```

## TODOs:
- Meter el caption de las imagenes. (DONE)
- Usar [slug](https://github.com/dodo/node-slug)
- Mejorar el tratamiento de imagenes con algun plugin jQuery. [CollagePlus](https://ed-lea.github.io/jquery-collagePlus/), [Chocolat](http://chocolat.insipi.de/),...
- Publicacion automatica en Drupal

## Referencias:
- https://github.com/ervwalter/ewalnet-docpad, incluye plugin
- http://www.delarre.net/posts/creating-a-docpad-plugin/

## License
Ver [Docpad](https://github.com/docpad/docpad#license)