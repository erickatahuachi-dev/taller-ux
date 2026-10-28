const formulario = document.getElementById("formulario-notas");
const mensajeEstado = document.getElementById("mensaje-estado");
const listaNotas = document.getElementById("lista-notes");

function mostrarNotificacion(texto, tipo) {
    mensajeEstado.textContent = texto;
    mensajeEstado.className = "mensaje " + tipo;
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    formulario.classList.add("validado");

    if (!formulario.checkValidity()) {
        mostrarNotificacion("Por favor, rellena todos los campos requeridos.", "error");
        formulario.querySelector("input:invalid, select:invalid").focus();
        return;
    }

    const titulo = document.getElementById("titulo-nota").value;
    const categoria = document.getElementById("categoria-nota").value;

    const li = document.createElement("li");
    li.className = "nota-item";
    li.innerHTML = `
        <span><strong>[${categoria}]</strong> ${titulo}</span>
        <button class="btn-eliminar" type="button">Eliminar</button>
    `;

    li.querySelector(".btn-eliminar").addEventListener("click", function() {
        if (confirm(`¿Estás seguro de que deseas eliminar la nota: "${titulo}"?`)) {
            li.remove();
            mostrarNotificacion("Nota eliminada correctamente.", "exito");
        }
    });

    listaNotas.appendChild(li);
    
    mostrarNotificacion("¡Nota agregada con éxito!", "exito");
    
    formulario.reset();
    formulario.classList.remove("validado");
});

formulario.addEventListener("reset", function (evento) {
    if (!confirm("¿Seguro que quieres limpiar los campos actuales de la nota?")) {
        evento.preventDefault();
        return;
    }
    mostrarNotificacion("Formulario vaciado.", "exito");
    formulario.classList.remove("validado");
});