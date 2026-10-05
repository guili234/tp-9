const div_resultados_edinicio = document.getElementById("div_resultados_edinicio");
const div_resultados_dbinicio = document.getElementById("div_resultados_dbinicio");

let lista_db = JSON.parse(localStorage.getItem('lista_db')) || [];
mostrar_lista_db(lista_db);
let lista_ed = JSON.parse(localStorage.getItem('lista_ed')) || [];
mostrar_lista_edinicio(lista_ed);

function mostrar_lista_db(lista_db) {
    div_resultados_dbinicio.innerHTML = "";
        let docentes = lista_db[lista_db.length-1]
        div_resultados_dbinicio.innerHTML += "<h2>Nombre: " + docentes.nombre + "</h2>";
        div_resultados_dbinicio.innerHTML += "<h3>Edad: " + docentes.edad + "</h3>";
        div_resultados_dbinicio.innerHTML += "<h3>Edad: " + docentes.asignatura + "</h3>";
        div_resultados_dbinicio.innerHTML += "<h3>Curso: " + docentes.asignaturas + "</h3>";
    
}

function mostrar_lista_edinicio(estudiantes) {
    div_resultados_edinicio.innerHTML = "";
    if(estudiantes.length > 0){
        let estudiantes = estudiantes[estudiantes.length-1]
        let estudiante = estudiantes[i];
        let suma = 0;
        for (let j = 0; j < estudiante.notas.length; j++) {
            suma += parseInt(estudiante.notas[j]);
        }
        let promedio = 0;
        if (estudiante.notas.length > 0) {
            promedio = suma / estudiante.notas.length;
        }
        let resultado = "";
        if (promedio >= 7) {
            resultado = "APROBADO";
        } else {
            resultado = "DESAPROBADO";
        }
        div_resultados_edinicio.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultados_edinicio.innerHTML += "<h2>Nombre: " + estudiante.nombre + "</h2>";
        div_resultados_edinicio.innerHTML += "<h3>Edad: " + estudiante.edad + "</h3>";
        div_resultados_edinicio.innerHTML += "<h3>Curso: " + estudiante.curso + "</h3>";
        div_resultados_edinicio.innerHTML += "<h3>Notas: " + estudiante.notas + "</h3>";
        div_resultados_edinicio.innerHTML += "<h3>Promedio: " + promedio + "</h3>";
        div_resultados_edinicio.innerHTML += "<h3>" + resultado + "</h3>";
        div_resultados_edinicio.innerHTML += "<input type='number' id='nota" + i + "'>";
        div_resultados_edinicio.innerHTML += "<button type='button' onclick='guardarnota(" + i + ")'>Guardar nota</button>";
    }
}
