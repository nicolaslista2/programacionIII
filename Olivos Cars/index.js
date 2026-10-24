document.addEventListener("DOMContentLoaded", () => {
    console.log("Aplicación Supercars Olivos inicializada correctamente.");

    // Manejo de formulario con event.preventDefault()
    const miFormulario = document.getElementById("miFormulario");

    if (miFormulario) {
        miFormulario.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitamos el envío por defecto del formulario HTML
            alert("¡Consulta recibida con éxito!");
            console.log("Validando datos del formulario...");
            console.log("Datos listos para procesar.");
        });
    }
});