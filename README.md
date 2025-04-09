# NodeJS
### QUÉ ES NODEJS
*  Entorno de ejecución de JavaScript del lado del servidor para crear aplicaciones web rápidas y escalables 
*  Permite operaciones de entrada/salida no bloqueantes, maximizando la eficiencia 
*  Creado por Ryan Dahl en 2009 
*  Desarrollado para manejar miles de conexiones simultáneas con alta eficiencia utilizando el motor V8 de Google Chrome

### CARACTERÍSTICAS DE NODEJS 
* Motor V8 de Google Chrome: Ejecuta código Javascript a gran velocidad. Traduce el código Javascript a código máquina nativo 
* Basado en eventos y I/O no bloqueante: Maneja múltiples conexiones simultáneamente. Optimiza la eficiencia y la escalabilidad

### CARACTERÍSTICAS DE NODEJS  
* Módulos: Permite reutilizar y compartir código, favoreciendo así la organización 
* Node Package Manager (NPM): Facilita la gestión de dependencias con un ecosistema enorme de bibliotecas de código abierto
 
###  V8 JAVASCRIPT ENGINE 
* Desarrollado por Google para Google Chrome optimizado para ejecutar Javascript rápidamente 
* Traduce el código Javascript en código máquina en tiempo de ejecución 
* Reduce los riesgos de pérdidas de memoria realizando una recolección de basura automática 
* Es de código abierto, por lo que es ampliamente utilizado y en constante desarrollo
 
### EVENT LOOP 
* NodeJS puede manejar múltiples solicitudes de manera simultánea. E/S no bloqueante 
* Las operaciones de E/S se manejan a través de eventos y callbacks 
* Mediante el bucle de eventos, NodeJS es capaz de realizar múltiples tareas sin necesidad de múltiples hilos de ejecución 
* Es fundamental para mejorar la eficiencia y el rendimiento
 
### EN EL FUTURO 
* NodeJS continúa evolucionando y salen versiones nuevas de manera habitual 
* Como alternativa disponemos de la evolución natural, representada por Deno 
* Existen otras alternativas que fomentan la velocidad y la optimización como Bun, pero todavía necesita mucha evolución y comunidad


## 🚀 Instalación rápida de Node.js y npm en macOS

### 📌 1. Verificar si ya está instalado
```sh
node -v

📌 2. Instalar Node.js y npm con Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node

📌 3. Verificar la instalación
node -v
npm -v

🎉 ¡Listo! Ahora puedes usar Node.js y npm 🚀
```

# 📌 Inicializar un proyecto npm 

✅  Ejemplo de uso

```npm

npm init -y

```

## 📌 Variables Globales en Node.js: `__dirname` y `__filename`

En **Node.js**, las variables globales `__dirname` y `__filename` son útiles para trabajar con archivos y directorios.

##  __dirname

✅ **¿Qué es?**  
`__dirname` devuelve la **ruta absoluta** del directorio donde se encuentra el script actual.

### 📌 **Ejemplo de uso**
```javascript
console.log(__dirname);
```

---


##  __filename

✅ ¿Qué es? __filename devuelve la ruta absoluta del archivo actual, incluyendo el nombre del archivo.

📌 Ejemplo de uso

```javascript
console.log(__filename);

const path = require("path");

console.log(path.basename(__filename)); // index.js
console.log(path.basename(__filename, ".js")); // index

```
---



---
# 📌 process.argv en Node.js

✅ ¿Qué es process.argv? 
process.argv es una propiedad del objeto global process en Node.js que devuelve un array de strings, donde cada elemento representa un argumento pasado al script al ejecutarlo desde la terminal.

 📌 Estructura de process.argv 

Cuando ejecutas un script de Node.js, process.argv contiene al menos dos elementos:
1.	El primer elemento (process.argv[0]) → Ruta del ejecutable de Node.js.
2.	El segundo elemento (process.argv[1]) → Ruta del script que se está ejecutando.
3.	Los siguientes elementos (process.argv[2] en adelante) → Argumentos pasados por el usuario.

```javascript
// args.js
console.log("Lista de argumentos:", process.argv);

// Obtener los argumentos después del índice 2
const args = process.argv.slice(2);
console.log("Argumentos recibidos:", args);

```
2️⃣ Ejecutar el script con argumentos

```bash
node args.js Hola Mundo 123

```

🚀 ¿Para qué sirve process.argv?

* ✅ Permite recibir datos dinámicos sin modificar el código.
* ✅ Útil en scripts CLI (Command Line Interface).
* ✅ Ideal para automatización y configuraciones personalizadas.


# 🚀 Promesas y async/await en JavaScript

## 📘 ¿Qué es una `Promise`?

Una **Promesa** es un objeto en JavaScript que representa la **finalización o el fracaso** de una operación **asíncrona**.

---

### 📊 Estados de una promesa

| Estado      | Descripción                                        |
|-------------|----------------------------------------------------|
| `pending`   | Promesa pendiente, aún no ha sido resuelta o rechazada |
| `fulfilled` | La operación fue completada con éxito (`resolve`) |
| `rejected`  | La operación falló (`reject`)                      |

---

### ✅ Sintaxis básica

```javascript
const promesa = new Promise((resolve, reject) => {
  // lógica asíncrona
});
```

---

### 🔁 Ejemplo con `.then()` y `.catch()`

```javascript
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;

      if (exito) {
        resolve("✅ Datos recibidos correctamente.");
      } else {
        reject("❌ Error al obtener los datos.");
      }
    }, 2000);
  });
}

obtenerDatos()
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));
```

---

## ⚡ ¿Qué es `async` / `await`?

`async` y `await` son una **forma más legible y moderna** de trabajar con promesas.

- `async`: define una función que devuelve automáticamente una promesa.
- `await`: detiene la ejecución hasta que una promesa se resuelva o rechace.

---

### 🔁 Mismo ejemplo usando `async/await`

```javascript
async function mostrarDatos() {
  try {
    const resultado = await obtenerDatos();
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

mostrarDatos();
```

---

## 🧠 ¿Cuándo usar cada uno?

| Situación                       | Recomendación         |
|--------------------------------|------------------------|
| Código corto o encadenado      | Usa `.then()` y `.catch()` |
| Flujo largo o legible          | Usa `async/await`     |
| Múltiples promesas en paralelo | Usa `Promise.all()`   |

---

## 🧪 Ejemplo adicional: Simular petición a una API

```javascript
function obtenerUsuarios() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Ana", "Luis", "Carlos"]);
    }, 1500);
  });
}

async function mostrarUsuarios() {
  const usuarios = await obtenerUsuarios();
  console.log("Usuarios:", usuarios);
}

mostrarUsuarios();
```

---

## 🧯 Manejo de errores

Tanto `.catch()` como `try/catch` permiten manejar errores:

- `.catch()` se usa con `.then()`
- `try/catch` se usa con `async/await`

---

## 📝 Conclusión

- Las **promesas** ayudan a manejar operaciones asíncronas de forma eficiente.
- `async/await` hace que el código sea **más limpio, legible y fácil de mantener**.
- Son herramientas fundamentales para trabajar con APIs, bases de datos, archivos, etc.

> 💡 Dominar promesas y `async/await` es clave para trabajar con JavaScript moderno y Node.js.


## Instalacion de nodeJS

### 📌 **Instalacion de NodeJs**
```console

 * npm install -g nodemon      
 * npm install express   
 * npm install dotenv
 * npm install -g express-generator



```


### 📌 **Instalacion de NodeJs Global**
```console
 * npm install -g express-generator
 express --help

  Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
❯ express --no-view --git firstApp

   create : firstApp/
   create : firstApp/public/
   create : firstApp/public/javascripts/
   create : firstApp/public/images/
   create : firstApp/public/stylesheets/
   create : firstApp/public/stylesheets/style.css
   create : firstApp/routes/
   create : firstApp/routes/index.js
   create : firstApp/routes/users.js
   create : firstApp/public/index.html
   create : firstApp/.gitignore
   create : firstApp/app.js
   create : firstApp/package.json
   create : firstApp/bin/
   create : firstApp/bin/www

   change directory:
     $ cd firstApp

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=firstapp:* npm start

* npm install

```