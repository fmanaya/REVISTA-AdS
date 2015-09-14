
@echo on
echo proceso imagenes revista %1

rem Paso 1: poner los jpgs creados por Docpad en un diretorio separado
mkdir out\img\srbl%1\dp
del /Q out\img\srbl%1\dp\*
copy out\img\srbl%1\* out\img\srbl%1\dp

rem Paso 2: preparar nuevo directorio donde dejaremos las nuevas imagenes tratadas
mkdir out\img\srbl%1\dpOut
del /Q out\img\srbl%1\dpOut\*



rem mkdir out\img\srbl%1%\web
rem del out\img\srbl%1%\web\*
rem copy out\img\srbl%1%\*_default_ out\img\srbl%1%\web

node imgszMA.js out/img/srbl%1/dp    out/img/srbl%1/dpOut    out/s%1


rem Y por ultimo optimizo imagenes
gm mogrify -quality 70 -colorspace RGB out/img/srbl%1/dpOut/*
rem gm convert -colorspace RGB out/img/srbl%1/dpOut/*

rem coger la salida de consola ... 