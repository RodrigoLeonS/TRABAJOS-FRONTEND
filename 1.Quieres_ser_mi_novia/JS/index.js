// console.log(nombre1);

// console.log(nombre3);



// nombre = 'Rodrigo';
// apellido = 'Salsavilca';

// console.log(`Nombre: ${nombre}, Apellido: ${apellido}`)

// const edad = 6;

// if (edad < 18) {
//     console.log('Usted es menor de edad')
// }
// else {
//     console.log('Usted es mayor de edad')
// }
// const tabla = 2
// for (let i=1; i<=12; i++) {
//     console.log(`${tabla} x ${i} = ${tabla * i}`)
// }
// let i=1
// do {
//     console.log(`${tabla} x ${i} = ${tabla * i}`); 
//     i++;
// } while (i <=12);
// let estofados = ['Cuy','Conejo','Raton','Camello']

// for (let i in estofados){
//     console.log(`Animal ${++i}: ${estofados[i]}`)
// }

// for (let estofado of estofados){
//     console.log(`Animal : ${estofado}`)
// }

// const perro1 = {
//     nombre : 'Rodrigo',
//     edad: '24',
//     raza: 'Chusca',
//     color: 'Verde',
//     fechaNacimiento: '05/07/1998',
//     vacunado: false,
//     tamaño: 'Grande',
//     owner: 'Leon',
//     ladrar: function() {
//         return 'guaf guaf'
//     }
// }

// console.log(perro1);
// console.log(perro1.nombre);
// console.log(perro1['edad']);
// console.log(perro1.ladrar());
// function Perro()

// const numeros = [8,88,5,55,18];

// console.log(numeros);
// console.log(numeros[3]);

// const nombres = ['Elliot',17,true,'2000/10/12']
// console.log(nombres)
// console.log(nombres.length)

// const comidas = ['1','2','3','4']
// console.log(comidas);
// comidas.push('Estofado');
// console.log(comidas)

// console.log(document);
// const title = document.getElementById('title');
// console.log(title)
// const partner = prompt('Ingrese su nombre')
// console.log(title.innerText += ` ${partner}`);
// const mainButton = document.querySelector('button')
// console.log(mainButton);
// const buttons = document.querySelectorAll('button')
// console.log(buttons);
// window.addEventListener('load', () => {
//     const loader = document.querySelector('#loader');
//     loader.style.display = 'none';
// });


// document.addEventListener('DOMContentLoaded', () => {

// const title = document.getElementById('title');
// title.innerText += '?';

// });
const mensajeAceptacion = () => {
    alert('Ahora somos novios');
};
const heroButtonYes = document.getElementById('heroButtonYes');
heroButtonYes.addEventListener('click',mensajeAceptacion );
const heroButtonNo = document.getElementById('heroButtonNo');

heroButtonNo.addEventListener('click', () => {
    heroButtonYes.removeEventListener('click',mensajeAceptacion);
    alert('Igual serás mi novia :3 !¡');
})


const heroTitle = document.querySelector('.hero__title');
    heroTitle.innerHTML += '<sub>?</sub>';