console.log("bonjour")

const ready = function(){
  const people = ["Bernardo","Sharon","Emerson", "Emma""Blabla"},
]

  const thead = document.querySelector("thead");
  let lastname = document.createTextNode ("Nom");
  let th = appendChild("th");
  let tr = appendChild("tr");
  thlastname.appendChild(lastname);
  tr.appendChild(th);
  thead.appendChild(tr);

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
