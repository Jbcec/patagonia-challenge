# 📜 Phrase Cards Challenge

Este proyecto es parte de un challenge de frontend cuyo objetivo es implementar una aplicación que muestre un conjunto de frases en formato de tarjetas (*cards*), con funcionalidad de filtrado, paginación y tests automatizados.

---

## 🚀 Tecnologías utilizadas

- **React** – Librería principal para la UI  
- **Redux Toolkit** – Manejo del estado global  
- **Jest** + **React Testing Library** – Testing unitario e integración  
- **CSS** – Estilos globales en `index.css`  

---

## 📂 Estructura principal

src/
├── app/ # Configuración de Redux store y slices
├── components/ # Componentes como PhraseCard, PhraseGrid, Pagination
├── tests/ # Tests automatizados
├── index.css # Estilos globales
└── main.jsx # Punto de entrada

---


---

## ⚙️ Instalación y ejecución

1. **Clonar el repositorio**

```bash
git clone https://github.com/Jbcec/patagonia-challenge.git
cd phrase-cards
```

2. **Instalar dependencias**
npm install

3. **Levantar el servidor de desarrollo**
npm start

4. Abrir el navegador, el proyecto corre en  http://localhost:3000


🧪 Correr los tests

```bash
npm test
```

🖥️ Funcionalidades actuales

✅ Mostrar frases en formato de tarjetas
✅ Filtrar frases por texto
✅ Paginación para evitar scroll infinito
✅ Tests unitarios y de integración
✅ Diseño responsive


📌 Próximos pasos (TO DO)

    ✏️ Agregar funcionalidad para copiar el texto de las frases desde las tarjetas

