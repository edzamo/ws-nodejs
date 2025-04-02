# NodeJS

# 📌 Variables Globales en Node.js: `__dirname` y `__filename`

En **Node.js**, las variables globales `__dirname` y `__filename` son útiles para trabajar con archivos y directorios.

---

## **1. `__dirname`**
### ✅ **¿Qué es?**  
`__dirname` devuelve la **ruta absoluta** del directorio donde se encuentra el script actual.

### 📌 **Ejemplo de uso**
```javascript
console.log(__dirname);
```

## **2. __filename

### ✅ ¿Qué es?

__filename devuelve la ruta absoluta del archivo actual, incluyendo el nombre del archivo.

📌 Ejemplo de uso

```javascript
console.log(__filename);

const path = require("path");

console.log(path.basename(__filename)); // index.js
console.log(path.basename(__filename, ".js")); // index

```

# 📌 Variables Globales en Node.js: `__dirname` y `__filename`
## Inicializar un proyecto npm 

```npm

npm init -y

```