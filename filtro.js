const div_estudiante = document.getElementById("resultados_ed");
const div_docente = document.getElementById("resultados_db");

function filtrar(){

    let curso = document.getElementById("curso").value;

    let estudiantes = JSON.parse(localStorage.getItem("lista_ed"));
    let docentes = JSON.parse(localStorage.getItem("lista_db"));

    //filtro con for
    if (estudiantes.length == 0) {
        alert("No hay estudiantes guardados");
        
    }else{
    div_estudiante.innerHTML = "";
    for (let i = 0; i < estudiantes.length; i++) {
        let estudiante = estudiantes[i];

        if (estudiante.curso == curso) {
            div_estudiante.innerHTML += "<h2>Nombre: " + estudiante.nombre + "</h2>";
            div_estudiante.innerHTML += "<h3>Edad: " + estudiante.edad + "</h3>";
            div_estudiante.innerHTML += "<h3>Curso: " + estudiante.curso + "</h3>";
            div_estudiante.innerHTML += "<h3>Notas: " + estudiante.notas + "</h3>";
        }
    }
    }
    if (docentes.length == 0) {
        alert("No hay docentes guardados");
        return;
        
    }else{
    div_docente.innerHTML = "";
    for (let i = 0; i < docentes.length; i++) {
        let docente = docentes[i];

        for (let j = 0; j < docente.cursos.length; j++) {
            if (docente.cursos[j] == curso) {
                div_docente.innerHTML += "<h2>Nombre: " + docente.nombre + "</h2>";
                div_docente.innerHTML += "<h3>Edad: " + docente.edad + "</h3>";
                div_docente.innerHTML += "<h3>Asignatura: " + docente.especialidad + "</h3>";
                div_docente.innerHTML += "<h3>Cursos: " + docente.cursos + "</h3>";
            }
        }
    }
}
}