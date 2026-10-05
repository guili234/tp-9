const div_resultados_ed = document.getElementById("div_resultados_edinicio")
const div_resultados_db = document.getElementById("div_resultados_dbinicio")

let lista_ed = JSON.parse(localStorage.getItem('lista_ed')) || [];
mostrar_lista_ed(lista_ed);

let lista_db = JSON.parse(localStorage.getItem('lista_db')) || [];
mostrar_lista_db(lista_db);

function mostrar_lista_ed(lista) {
    if (lista.length == 0){
        div_resultados_db.innerHTML = "NO HAY ESTUDIANTES";
    }else{
    div_resultados_ed.innerHTML = "";
    for (let i = 0; i < lista.length; i++){
        let estudiante = lista[i];
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
        div_resultados_ed.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultados_ed.innerHTML += "<h2>Nombre: " + estudiante.nombre + "</h2>";
        div_resultados_ed.innerHTML += "<h3>Edad: " + estudiante.edad + "</h3>";
        div_resultados_ed.innerHTML += "<h3>Curso: " + estudiante.curso + "</h3>";
        div_resultados_ed.innerHTML += "<h3>Notas: " + estudiante.notas + "</h3>";
        div_resultados_ed.innerHTML += "<h3>Promedio: " + promedio + "</h3>";
        div_resultados_ed.innerHTML += "<h3>" + resultado + "</h3>";
        div_resultados_ed.innerHTML += "<input type='number' id='nota" + i + "'>";
        div_resultados_ed.innerHTML += "<button type='button' onclick='guardarnota(" + i + ")'>Guardar nota</button>";
    }
    }
}

function mostrar_lista_db(lista_db) {
    if (lista_db.length == 0){
        div_resultados_db.innerHTML = "NO HAY DOCENTES";
    }else{
        div_resultados_db.innerHTML = "";
        for (let i = 0; i < lista_db.length; i++){
            let docentes = lista_db[i]
            div_resultados_db.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
            div_resultados_db.innerHTML += "<h2>Nombre: " + docentes.nombre + "</h2>";
            div_resultados_db.innerHTML += "<h3>Edad: " + docentes.edad + "</h3>";
            div_resultados_db.innerHTML += "<h3>asignaturas: " + docentes.asignaturas + "</h3>";
        }
    }
    
}