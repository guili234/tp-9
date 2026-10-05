const input_nombre_docente = document.getElementById("nombre_docente");
const input_especialidad = document.getElementById("asignatura");
const input_edad_docente = document.getElementById("edad_docente");

const div_resultados_db = document.getElementById("div_resultados_db");

let lista_db = JSON.parse(localStorage.getItem('lista_db')) || [];
mostrar_lista_db(lista_db);

