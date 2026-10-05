const div_resultados_db = document.getElementById("resultados_db");

let lista_db = JSON.parse(localStorage.getItem('lista_db')) || [];
mostrar_lista_db(lista_db)

function mostrar_lista_db(lista) {
    div_resultado_db.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        let docente = lista[i];
        div_resultado_db.innerHTML +=
            "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultado_db.innerHTML +=
            "<h2>Nombre: " + docente.nombre + "</h2>";
        div_resultado_db.innerHTML +=
            "<h3>Edad: " + docente.edad + "</h3>";
        div_resultado_db.innerHTML +=
            "<h3>Asignatura: " + docente.especialidad + "</h3>";
        div_resultado_db.innerHTML +=
            "<h3>Cursos: " + docente.cursos + "</h3>";
        div_resultado_db.innerHTML +=
            "<label for='cursos'>Cursos</label>";
        div_resultado_db.innerHTML +=
            "<input type='text' id='cursos" + i + "'>";
        div_resultado_db.innerHTML +=
            "<button class='agregar_curso' type='button' onclick='agregar_curso(" + i + ")'>AGREGAR CURSO</button>";
        div_resultado_db.innerHTML += "<hr>";
    }
}

function agregar_curso(index) {
    let curso = document.getElementById("cursos" + index).value;
    lista_db[index].cursos.push(curso);
    localStorage.setItem("lista_db", JSON.stringify(lista_db));
    mostrar_lista_db(lista_db);
}

function borrar_db() {
    lista_db = [];
    localStorage.removeItem("lista_db");
    alert("DOCENTES BORRADOS");
}