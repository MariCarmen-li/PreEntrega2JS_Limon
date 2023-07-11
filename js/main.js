// Mensaje de bienvenida
// Función para validar texto
function esTexto(valor) {
    return /^[a-zA-Z\s]+$/.test(valor);
  }
  
  // Función para solicitar y validar el nombre del usuario
  function solicitarNombre() {
    var nombreUsuario = prompt("¡Bienvenido Docente! Por favor, ingrese tu nombre:");
  
    if (nombreUsuario) {
      if (esTexto(nombreUsuario)) {
        alert("¡Hola, " + nombreUsuario + "! Bienvenido a nuestro sitio web.");
      } else {
        alert("Por favor, ingrese un nombre válido.");
        solicitarNombre(); // Volver a solicitar el nombre
      }
    } else {
      alert("¡Hola! Bienvenido a nuestro sitio web.");
      solicitarNombre(); // Volver a solicitar el nombre
    }
  }
  
  // Llamada a la función para solicitar el nombre del usuario
  solicitarNombre();
  
  // Instrucciones
  alert("Para asignar una calificacion y un comentario a la tarea porfavor da click en el boton 'Agregar Calificación'. Una vez que agregues la calificación podras agregar la tarea a la lista de tareas dando click en el boton 'Lista de Tareas'.");


//Boton agregar calificacion 
function obtenerCalificacionYComentario() {
    var calificacion = "";
    var comentario = "";
  
    while (!validarNumero(calificacion)) {
      calificacion = prompt("Ingrese una calificación válida:");
    }
  
    while (!validarTexto(comentario)) {
      comentario = prompt("Ingrese un comentario válido:");
    }
  
    var resultadoDiv = document.getElementById("resultado-calificacion");
    resultadoDiv.innerHTML = "Calificación: " + calificacion + "<br>Comentario: " + comentario;
  
    // Mostrar los datos ingresados
    alert("Calificación: " + calificacion + "\nComentario: " + comentario);

  }
  
  // Función para validar que se ingrese un número válido
  function validarNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
  }
  
  // Función para validar que se ingrese texto válido
  function validarTexto(valor) {
    return /^[a-zA-Z\s]+$/.test(valor);
  }

//funcionalidades segunda parte
function iniciarapplt() {
function mostrarMenu() {
    var opcion = prompt(
      "Seleccione una opción:\n" +
      "1. Agregar tarea a la lista\n" +
      "2. Eliminar tarea de la lista\n" +
      "3. Editar tarea\n" +
      "4. Visualizar lista de tareas"
    );
  
    switch (opcion) {
      case "1":
        agregarTarea();
        break;
  
      case "2":
        eliminarTarea();
        break;
  
      case "3":
        editarTarea();
        break;
  
      case "4":
        visualizarTareas();
        break;
  
      default:
        alert("Opción no válida");
        break;
    }
  
    var continuar = confirm("¿Desea realizar otra acción?");
    if (continuar) {
      mostrarMenu();
    } else {
      alert("Sesión finalizada");
    }
  
    // Funciones agregadas
    var listaTareas = []; // Array para almacenar las tareas
  
    function agregarTarea() {
      var nombreAlumno = prompt("Ingrese el nombre del alumno");
      while (!validarTexto(nombreAlumno)) {
        nombreAlumno = prompt("Ingrese un nombre válido (solo texto)");
      }
  
      var numeroLista = prompt("Ingrese el número de lista");
      while (!validarNumero(numeroLista)) {
        numeroLista = prompt("Ingrese un número válido");
      }
  
      var numeroTarea = prompt("Ingrese el número de la tarea");
      while (!validarNumero(numeroTarea)) {
        numeroTarea = prompt("Ingrese un número válido");
      }
  
      var calificacion = prompt("Ingrese la calificación");
      while (!validarNumero(calificacion)) {
        calificacion = prompt("Ingrese un número válido");
      }
  
      var comentario = prompt("Ingrese un comentario");
      while (!validarTexto(comentario)) {
        comentario = prompt("Ingrese un comentario válido (solo texto)");
      }
  
      var tarea = {
        nombreAlumno: nombreAlumno,
        numeroLista: parseInt(numeroLista),
        numeroTarea: parseInt(numeroTarea),
        calificacion: parseInt(calificacion),
        comentario: comentario
      };
  
      listaTareas.push(tarea); // Agregar tarea al array
      alert("Tarea agregada");
    }
  
    function eliminarTarea() {
      var numeroTarea = prompt("Ingrese el número de tarea que desea eliminar");
      while (!validarNumero(numeroTarea)) {
        numeroTarea = prompt("Ingrese un número válido");
      }
  
      var tareaEncontrada = false;
      for (var i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].numeroTarea === parseInt(numeroTarea)) {
          listaTareas.splice(i, 1); // Eliminar tarea del array
          tareaEncontrada = true;
          alert("Tarea eliminada");
          break;
        }
      }
  
      if (!tareaEncontrada) {
        alert("No se encontró ninguna tarea con ese número");
      }
    }
  
    function editarTarea() {
      var numeroTarea = prompt("Ingrese el número de tarea que desea editar");
      while (!validarNumero(numeroTarea)) {
        numeroTarea = prompt("Ingrese un número válido");
      }
  
      var tareaEncontrada = false;
      for (var i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].numeroTarea === parseInt(numeroTarea)) {
          var nuevaCalificacion = prompt("Ingrese la nueva calificación");
          while (!validarNumero(nuevaCalificacion)) {
            nuevaCalificacion = prompt("Ingrese un número válido");
          }
  
          var nuevoComentario = prompt("Ingrese el nuevo comentario");
          while (!validarTexto(nuevoComentario)) {
            nuevoComentario = prompt("Ingrese un comentario válido (solo texto)");
          }
  
          listaTareas[i].calificacion = parseInt(nuevaCalificacion);
          listaTareas[i].comentario = nuevoComentario;
          tareaEncontrada = true;
          alert("Tarea editada");
          break;
        }
      }
  
      if (!tareaEncontrada) {
        alert("No se encontró ninguna tarea con ese número");
      }
    }
  
    function visualizarTareas() {
      var listaTareasTexto = "Lista de tareas:\n";
      listaTareas.forEach(function (tarea) {
        listaTareasTexto += "Nombre del alumno: " + tarea.nombreAlumno + "\n";
        listaTareasTexto += "Número de lista: " + tarea.numeroLista + "\n";
        listaTareasTexto += "Número de tarea: " + tarea.numeroTarea + "\n";
        listaTareasTexto += "Calificación: " + tarea.calificacion + "\n";
        listaTareasTexto += "Comentario: " + tarea.comentario + "\n";
        listaTareasTexto += "------------------------\n";
      });
  
      if (listaTareas.length > 0) {
        alert(listaTareasTexto);
      } else {
        alert("La lista de tareas está vacía");
      }
    }
  
    function validarTexto(texto) {
      return /^[a-zA-Z\s]+$/.test(texto);
    }
  
    function validarNumero(numero) {
      return /^[0-9]+$/.test(numero);
    }
  }
  
  mostrarMenu();
}