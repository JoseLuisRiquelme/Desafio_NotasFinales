//Datos alumno

const nombre = document.getElementById('nombre');
const carrera = document.getElementById('carrera')

//prompts
const nombre1 = prompt('Bienvenid@ cual es tu nombre?');
const carrera1 = prompt('Cual es tu carrera?');

nombre.innerHTML = nombre1;
carrera.innerHTML = carrera1;

//html 
const n1h= document.getElementById('n1h');
const n2h= document.getElementById('n2h');
const n3h= document.getElementById('n3h');
const promedioh= document.getElementById('promedioh');

//prompts

const nota1h = +prompt('Ingrese la nota 1 de HTML');
const nota2h = +prompt('Ingrese la nota 2 de HTML');
const nota3h = +prompt('Ingrese la nota 3 de HTML');

n1h.innerHTML = nota1h;
n2h.innerHTML = nota2h;
n3h.innerHTML = nota3h;

promedioh.innerHTML =((nota1h + nota2h + nota3h)/3).toFixed(2)

//css 
const n1c= document.getElementById('n1c');
const n2c= document.getElementById('n2c');
const n3c= document.getElementById('n3c');
const promedioc= document.getElementById('promedioc');

//prompts

const nota1c = +prompt('Ingrese la nota 1 de CSS');
const nota2c = +prompt('Ingrese la nota 2 de CSS');
const nota3c = +prompt('Ingrese la nota 3 de CSS');

n1c.innerHTML = nota1c;
n2c.innerHTML = nota2c;
n3c.innerHTML = nota3c;

promedioc.innerHTML =((nota1c + nota2c + nota3c)/3).toFixed(2) 

//js
const n1j= document.getElementById('n1j');
const n2j= document.getElementById('n2j');
const n3j= document.getElementById('n3j');
const promedioj= document.getElementById('promedioj');

//prompts

const nota1j = +prompt('Ingrese la nota 1 de JS');
const nota2j = +prompt('Ingrese la nota 2 de JS');
const nota3j = +prompt('Ingrese la nota 3 de JS');

n1j.innerHTML = nota1j;
n2j.innerHTML = nota2j;
n3j.innerHTML = nota3j;

promedioj.innerHTML =((nota1j + nota2j + nota3j)/3).toFixed(2) 