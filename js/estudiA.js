/**1. ESTUDIANTE-A
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que retorne los estudiantes de un semestre dado.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
 Función: estudiantesSemestre.
Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
Retorno: array de objetos estudiante que pertenecen al semestre indicado.  */

let personas = [
    {nombre: "Luis", semestre: 5, nota: 14},
    {nombre: "Lola", semestre: 5, nota: 20},
    {nombre: "Lola", semestre: 4, nota: 20},
];

let estudiantesSemestre = (personas, num) => {
    let  persona = personas.filter ((person)=> person.semestre === num);
   
  return persona;
   

 // for (let i = 0; i < array.length; i++) {
 //   let (array[i] = semestre)  (personas)
};
   // return personas;

let salida = document.getElementById("salida");
let persona5 = estudiantesSemestre (personas, 5);

salida.innerHTML =`Personas que pertenecen al 5to semestre:<br>`
persona5.forEach((persona5) => {
    salida.innerHTML += `<br> ${persona5.nombre} - nota: ${persona5.nota}`
});

//letpersona4 = estudiantesSemestre (personas, 4);

//let personas = estudiantesSemestre(array, 1)
//
//salida.innerHTML = `Personas en 5to semestre = J${estudiantesSemestre(array, 5)}`;