# 🚀 Prueba Técnica QA - Automatización con Cypress

Este repositorio contiene la automatización de una prueba técnica para validar habilidades en Cypress. La prueba simula un flujo de autenticación mediante PIN y búsqueda de información de embarques en una aplicación web.

---

## Objetivo de la prueba

Automatizar con Cypress el flujo completo de:

1. Acceso a la URL compartida.
2. Autenticación con PIN (válido e inválido).
3. Filtro por número de embarque.
4. Validación de embarque existente.
5. Validación de embarque no encontrado.

---

## Tecnologías utilizadas

- Cypress `14.5.1`
- Node.js `>= 16`
- Automatización de pruebas E2E
- Manejo de fixtures (`datos.json`)

---

## Estructura del Proyecto
📦 Prueba cypress/
├── cypress/
│ ├── e2e/
│ │ └── prueba_embarque.cy.js # Test principal
│ ├── fixtures/
│ │ └── datos.json # Datos de prueba
│ ├── screenshots/ # Evidencias (generadas por Cypress)
│ └── support/
│ └── e2e.js # Configuración de soporte
├── node_modules/
├── package.json
├── README.md
└── .gitignore

## Instalación y ejecución

### Clonar el repositorio
git clone https://github.com/danielCl1115/Prueba-de-AuAutomatizaci-n-Cypress.git

## Ejecucion
npm run test:embarque

## Prueba elaborada por
Daniel Felipe Clavijo Jimenez ingeniero de sistemas