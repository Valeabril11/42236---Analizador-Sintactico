# 📚 Analizador Sintáctico - MiLenguaje

**Autor**: Molina Valeria
**Legajo**: 42236

🔍 Este proyecto implementa un analizador sintáctico para una versión reducida de JavaScript, que procesa declaración de variables e impresión de contenido.

## 🛠 Requisitos
- [Node.js](https://nodejs.org/) (v18+ recomendado)
- [ANTLR4](https://www.antlr.org/) (v4.13.1)
- [VS Code](https://code.visualstudio.com/) con extensión [ANTLR4](https://marketplace.visualstudio.com/items?itemName=mike-lischke.vscode-antlr4)

## 🚀 Uso

```bash
# 1. Clonar repositorio
git clone https://github.com/Valeabril11/42236

# 2. Instalar dependencias
npm install

# 3. Generar analizadores (opcional)
npm run generate

# 4. Ejecutar proyecto
npm start

# 5. Funcionamiento
input.txt es lo que analizará el código

📂 Archivos de entrada
Archivo	Descripción
input.txt	Caso válido de prueba
input2.txt	Segundo caso válido
inputError.txt	Caso con errores sintácticos
inputError2.txt	Caso con errores léxicos
-------------------------
42236/
├── grammars/
│   └── MiLenguaje.g4          # Gramática ANTLR4
├── src/
│   ├── index.js               # Punto de entrada
│   └── CustomVisitor.js       # Visitor personalizado
├── test/                      # Casos de prueba
│   ├── input_*.txt
│   └── inputError_*.txt
├── package.json
└── README.md