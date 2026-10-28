# Auditoría y Rediseño de UX/UI - App Notas

Este documento registra la evaluación heurística y el rediseño accesible de la aplicación de notas.

## 1. Tabla de Auditoría (5 Heurísticas de Nielsen)

| Heurística | Problema Detectado (Antes) | Gravedad | Solución Aplicada (Después) |
| :--- | :--- | :--- | :--- |
| **Visibilidad del estado** | Al agregar o eliminar una nota no pasaba nada visualmente. | Alta | Se implementó un contenedor dinámico con `role="status"` para confirmaciones visibles. |
| **Coincidencia con el mundo real** | El botón de reinicio usaba un término de sistema confuso ("Flush Form"). | Media | Se cambió el texto por "Limpiar formulario", usando el lenguaje del usuario. |
| **Control y libertad** | Al hacer clic en borrar, las notas desaparecían instantáneamente sin opción a cancelar. | Alta | Se añadió una ventana de confirmación (`confirm()`) para cancelar la eliminación accidental. |
| **Prevención de errores** | Se permitían añadir notas vacías, rompiendo la lista en la interfaz. | Alta | Se configuró el atributo `required` para bloquear la acción antes de que ocurra el error. |
| **Reconocer, no recordar** | Se usaba un `placeholder` que se borraba al escribir, perdiendo la instrucción del campo. | Media | Se añadieron etiquetas `<label>` visibles y enlazadas permanentemente por `id`. |

## 2. Justificación de Leyes de Usabilidad

* **Ley de Fitts:** El botón principal "Guardar Nota" abarca el ancho disponible y posee una altura de `44px`. Está distanciado del botón "Limpiar todo" para mitigar clics erróneos.
* **Ley de Hick:** Las opciones de etiquetas de notas se agruparon categóricamente usando elementos `<optgroup>`, acelerando el tiempo de selección del usuario.
* **Ley de Miller:** Se fragmentó el formulario de captura en secciones agrupadas lógicamente para no saturar la memoria de trabajo del usuario.

## 3. Criterios de UI y Accesibilidad Aplicados

* **Colores y Contraste:** Declarados centralmente mediante variables en `:root`. El color del texto principal es `#1f2933` sobre un fondo blanco, cumpliendo un contraste superior a 4.5:1.
* **Foco Visible:** Configurado mediante la pseudoclase `:focus-visible` con un contorno de `3px` naranja, asegurando que la navegación por teclado (Tab) sea completamente rastreable.
* **Tamaño Táctil:** Todos los elementos interactivos (campos y botones) miden al menos `44px` de alto.