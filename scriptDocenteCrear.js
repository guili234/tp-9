const input_nombre_docente = document.getElementById("nombre_docente");
const input_especialidad = document.getElementById("asignatura");
const input_edad_docente = document.getElementById("edad_docente");

let lista_db = JSON.parse(localStorage.getItem('lista_db')) || [];

function guardar_db() {
    let nombre = input_nombre_docente.value;
    let edad = input_edad_docente.value;
    let especialidad = input_especialidad.value;
    if (nombre == "" || edad == "" || especialidad == "") {
        alert("Completa todos los campos");
        return;
    }
    let docente = {
        nombre: nombre,
        edad: edad,
        especialidad: especialidad,
        cursos: []
    };
    lista_db.push(docente);
    localStorage.setItem("lista_db", JSON.stringify(lista_db));
    alert("DOCENTE GUARDADO");
    input_nombre_docente.value = "";
    input_edad_docente.value = "";
    input_especialidad.value = "";
    mostrar_lista_db(lista_db);
}