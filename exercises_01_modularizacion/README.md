# NodeJS

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

# 📌 Inicializar un proyecto npm 

✅  Ejemplo de uso

```npm

npm init -y

```

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
