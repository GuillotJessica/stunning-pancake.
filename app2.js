console.log("bonjour")

const ready = function(){
  const people = [
    { firstname : "Bernardo", surname : "Blabla"},
    { firstname : "Sharon", surname : "Blabla"},
    { firstname : "Emerson", surname : "Blabla"},
    { firstname : "Emma", surname : "Blabla"},
]
// Pour trouver dans document :
// geElementbyId, querySelector, querySelectorAll
  const tbody = document.querySelector("tbody");
//***Ajouter un élément à un autre
//  tbody.innerHTML = remplace tout le contenu
//  tbody.appendChild()ajoute à la fin
//***Créer un élément/noeud
//  let tr = document.createElement("<tr></tr>")
//  tr.innerHTML = "<td>blabla<td>"
  for (let i =0; i<people.length; i++){
    let tr = document.createElement ("tr");
    let td = document.createElement ("td");
    //creer un nouveau noeud de texte
    let firstName = document.createTextNode (people[i]);
    td.appendChild(firstName);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}
document.addEventListener("DOMContentLoaded", ready());
