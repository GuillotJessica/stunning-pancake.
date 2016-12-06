console.log("bonjour")

const ready = function(){
  const people = [
    { firstname : "Bernardo", surname : "Blabla"},
    { firstname : "Sharon", surname : "Blabla"},
    { firstname : "Emerson", surname : "Blabla"},
    { firstname : "Emma", surname : "Blabla"},
]

  const thead = document.querySelector("thead");
  let lastname = document.createTextNode ("Nom");
  let thlastname = appendChild("th");
  let trlastname = appendChild("tr");
  thlastname.appendChild(lastname);
  trlastname.appendChild(thlastname);
  thead.appendChild(trlastname);

  const tbody = document.querySelector("tbody");
  for (let i =0; i<people.length; i++){
    let tr = document.createElement ("tr");
    let tdfirstname = document.createElement ("td");
    let tdsurname = document.createElement ("td");

    //creer un nouveau noeud de texte
    let firstname = document.createTextNode (people[i].firstname);
    let surname = document.createTextNode (people[i].surname);
    tdfirstname.appendChild(firstname);
    tr.appendChild(tdfirstname);
    tdsurname.appendChild(surname);
    tr.appendChild(tdsurname);
    tbody.appendChild(tr);
  }
}
document.addEventListener("DOMContentLoaded", ready());
