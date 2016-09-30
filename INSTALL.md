# Instalación

## Requisitos

| Paquete | Descripción |
| ---------- | ---------- |
| Node.js  | Node.js javascript del lado de servidor, versión v6.0.0 o superior |
| n | Manejador de versiones de Node.js |
| npm | Manejador de paquetes por defecto para Node.js |

## Instalación sobre Debian Jessie

## Instalación de dependencias

```sh
sudo apt-get install git git-core
```

## Instalación de n(node versión manager), Node.js y npm
Revisar instalación de node y npm en el proyecto backend.

## Instalar paquetes básicos

```sh
npm install -g bower gulp
```

## Instalar el proyecto

Clonar el repositorio

```sh
git clone https://github.com/fujuca510/tarjetas-memoria-frontend.git
cd tarjetas-memoria-frontend
```

Instalar dependencias del proyecto con `npm` y `bower`

```sh
npm install
bower install                   
```

Si la instalación pide que se seleccione la versión de angular la que utiliza la aplicación `sistema-habilitacion-titulacion`

## Archivo de configuración

```sh
nano src/app/index.constants.js
```

cambiar la URL del Backend, si es necesario.

```sh
...
.constant('API_BASE_URL', 'http://localhost:8800');
...
```

## Iniciar la aplicación

```sh
gulp serve
```

Probar la aplicación en un navegador web [tarjetas-memoria](http://localhost:3000), enlace `Tarjetas`.

Parar el servicio con `Ctrl + c`
