
/*Snack 3
Abbiamo sempre un array di squadre, con:
nome
punti fatti
falli subiti
Stampare in html (in forma tabellare!!! i dati relativi 
alle squadre evidenziando in giallo la riga corrispondente alla squadra con più falli subiti.
*/




const footballTeams = [
      {
            nameTeam : 'Squadra',
            pointTeam : 'Punti',
            foulTeam : 'Falli subiti'

      },

      {
            nameTeam : 'Brasil',
            pointTeam : 12,
            foulTeam : 20
      },

      {
            nameTeam : 'Germany',
            pointTeam : 10,
            foulTeam : 16

      },

      {
            nameTeam : 'Italy',
            pointTeam : 18,
            foulTeam : 18
      },


];
console.log(footballTeams)

const outputTable = document.querySelector('.output-table');

let team ;
let mostFoulTeam = 0

for (let x = 0; x < footballTeams.length; x++){
      //destrutturo - ??????
      //const {foulTeam} = footballTeams[x];
      const {nameTeam, pointTeam, foulTeam } = footballTeams[x]
     
      if (foulTeam > mostFoulTeam){
            team = footballTeams[x];
            mostFoulTeam = foulTeam;

            
      }
      outputTable.innerHTML+=`
      <ul>
            <li>${nameTeam}</li>
            <li>${pointTeam}</li>
            <li>${foulTeam}</li>

      </ul>
      `

}
console.log (team)

const {nameTeam, foulTeam} = team
console.log(`la squadra che ha registrato piu falli è ${nameTeam} con ${foulTeam} falli subiti`)




