/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6.
*/



/*var bikeArray = [
      {
            name: 'Bisa',
            peso: 30
      },

      {
            name: 'Covo',
            peso: 25
      },

      {
            name: 'Eve',
            peso: 15
      }
];

var lightLastBike; 
var moreLightBike;

for (var i = 0; i < bikeArray.length; i++ ){

      var thisPeso = bikeArray[i].peso;

      if (typeof moreLightBike ===  'undefined' || thisPeso < moreLightBike ){
            lightLastBike = bikeArray[i];
            moreLightBike = thisPeso;
      }
}

console.log (lightLastBike);
*/

//ES6


const bikeArray = [
      {
            name: 'Bisa',
            peso: 30
      },

      {
            name: 'Covo',
            peso: 25
      },

      {
            name: 'Eve',
            peso: 15
      }
];

let lightLastBike; 
let moreLightBike;

for (let i = 0; i < bikeArray.length; i++ ){

      const { peso } = bikeArray[i];

      if (typeof moreLightBike ===  'undefined' || peso < moreLightBike ){
            lightLastBike = bikeArray[i];
            moreLightBike = peso;
      }
}

const { name, peso} = lightLastBike;
console.log (`
 La bicicletta piu leggera è ${name} e pesa ${peso} chili
`);



