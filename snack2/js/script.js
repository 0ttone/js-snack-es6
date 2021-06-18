/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Svilupparlo in ES6.
*/


/*creare array squadre calcio
*/



const footballTeams = [

      {
            nameTeam : 'Brasil',
            pointTeam : 0,
            foulTeam : 0
      },

      {
            nameTeam : 'Germany',
            pointTeam : 0,
            foulTeam : 0

      },

      {
            nameTeam : 'Italy',
            pointTeam : 0,
            foulTeam : 0
      },


];
console.log(footballTeams)



// creo la funzione random
//function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

  //versione EC6 - rivedere video e slide significato sintassi riduzione
  //tutto su una riga non vuole return

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  for (let x = 0; x < footballTeams.length; x++){

      footballTeams[x].pointTeam = getRandomNumber (0, 100);
      footballTeams[x].foulTeam = getRandomNumber (0, 100);


  }

  console.log(footballTeams)
      console.log(`Array esteso sarà ${footballTeams.nameTeam[0]}`);
  console.log(nameTeam)
  

