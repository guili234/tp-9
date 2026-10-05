const input_nombre_estudiante = document.getElementById("nombre_estudiante");
const input_edad_estudiante = document.getElementById("edad_estudiante");
const input_curso = document.getElementById("curso");

const div_resultados_ed = document.getElementById("div_resultados_ed");
const div_resultados_edinicio = document.getElementById("div_resultados_edinicio");
const div_guardarnota_ed = document.getElementById("guardarnota_ed")

let lista_ed = JSON.parse(localStorage.getItem('lista_ed')) || [];
mostrar_lista_ed(lista_ed);

function guardar_ed(){
    const estudiante = {
        'nombre': input_nombre_estudiante.value,
        'curso': input_curso.value,
        'edad': input_edad_estudiante.value,
        'materias': [],
        'notas': []
    };


    lista_ed.push(estudiante);
    localStorage.setItem('lista_ed', JSON.stringify(lista_ed));
}

function mostrar_lista_ed(lista) {
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

function guardarnota_ed(id) {
    let nota = document.getElementById("nota" + id).value;

    if (nota >= 1 && nota <= 10) {
        lista_ed[id].notas.push(nota);
        localStorage.setItem("lista_ed", JSON.stringify(lista_ed));
        mostrar_lista_ed(lista_ed);
    } else {
        alert("Nota no válida");
    }
}

function borrar_ed() {
    lista_ed = [];
    localStorage.removeItem("lista_ed");
    div_resultados_ed.innerHTML = "";
}