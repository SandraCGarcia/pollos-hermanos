##Quick Starter kit Gulp

dependencias instaladas en este proyecto:
(`npm install bootstrap font-awesome jquery popper.js`)

herramientas usadas en este proyecto:
 (`npm install -D gulp gulp-cli gulp-sass browser-sync`)

 Arranque proyecto:
 `gulp`

 versión de gulp:
 Gulp4
 (https://fettblog.eu/gulp-4-parallel-and-series/)

Gulp oficial documentation: 
https://gulpjs.com/docs/en/getting-started/quick-start

## Guía de inicio rápido
Necesitarás instalar [Node.js](https://nodejs.org/) y [Gulp](https://gulpjs.com) para trabajar con este Starter Kit, luego:  
1. Instala las dependencias locales con `$ npm install`
2. Arranca el kit con `$ gulp`

## Espera, ¿esto se hace siempre?
> ### Solo una vez al principio en cada ordenador que utilicemos:
- Instalamos node
- Instalamos el comando de gulp de forma global para poder usarlo desde cualquier carpeta usando `npm install --global gulp-cli`

> ### Cada vez que descarguemos o clonemos un repo:
- `npm install` para instalar los paquetes necesarios para convertir Sass a CSS, minificarlo, etc.

> ### Cada vez que estemos trabajando con nuestro código:
- Desde nuestra terminal, ejecutamos el comando `gulp` para que realice la tarea por defecto, que en el caso del `gulpfile.js` que tenemos en adalab-web-starter-kit estará pendiente de nuestros archivos Sass, html y JavaScript y los compilará, minificará y/o recargará el servidor cada vez que hagamos un cambio

## Tareas de gulp incluidas
### Inicio de un web server para desarrollo
```
$ gulp
```
Lanza un webserver con BrowserSync y varios watchers estarán pendientes de los archivos SCSS/JS/HTML para recargar el navegador cuando se necesite.

### Versión lista para subir a producción
```
$ gulp deploy
```
Genera los CSS y JS minimizados y sin sourcemaps, listos para subir a producción.











