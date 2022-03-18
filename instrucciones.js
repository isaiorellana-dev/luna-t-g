// * Comentarios:
// Esto es un comentario común
// // Esto es un comentario de línea
// * Esto es un comentario para resaltar un bloque o linea de código
// ? Esto es un comentario para hacer una pregunta
// TODO: Esto es un comentario para indicar una tarea
// ! Esto es un comentario para indicar un error

//* Orden de estilos
// 1. Posicionamiento y Display (position, display, z-index)
// 2. Dimensiones (width, height, etc)
// 3. Fuentes (Cualquier configuración de texto)
// 4. Visuales (Background, animaciones, overflow, filtros, etc)

// * Atajos de teclado
// Alt + Z -> Si las lineas de código no caben horizontalmente usa este atajo se para que se ajuste a la pantalla
// Ctrl + A -> Seleccionar todo el texto
// Ctrl + / -> Comentar o des comentar una linea o selección
// Ctrl + L -> Selecciona toda la línea actual
// Ctrl + Shift + L -> Selecciona todas las palabras que coincidan con la selección actual //* Seleccionas una o mas palabras primero y luego presiona Ctrl + Shift + L
// Ctrl + . -> Corrector ortográfico // * Funciona si tenes el cursor en una palabra que tenga un error ortográfico

// * Code Runner
// La extension que sirve para correr código JavaScript, solo seleccionas el código que querés correr haces un click derecho y seleccionas "Run Code"
// Haz el intento con el código de abajo y vemos que pasa
const mensaje = "Esperando que venga el desarrollador";
const desarrolladores = [
  {
    nombre: "Isai",
    apellido: "Orellana",
  },
  {
    nombre: "David",
    apellido: "Nuñez",
  },
];
console.log(
  `${mensaje}: ${desarrolladores[1].nombre} ${desarrolladores[1].apellido}`
);
