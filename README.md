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