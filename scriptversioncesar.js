//  APP  GLOBALE VARIABLE
const app = {};

app.people = [{
    firstname: "Roberto",
    surname: "Dupuis",
    age: "20",
    height: "1.84"

}, {
    firstname: "Julia",
    surname: "Dupont",
    age: "30",
    height: "1.54"
}, {
    firstname: "Ezekiel",
    surname: "Duparc",
    age: "450",
    height: "2.46"
}, {
    firstname: "Buddy",
    surname: "Dupet",
    age: "89",
    height: "1.61"
}];

app.update = function() {
  // 1- Elle détruit le contenu tr du tableau
  const tbody = document.querySelector('tbody');
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  // 2- Elle reconstruit le tableau

  let trcreate = document.createDocumentFragment();

  for (let i = 0; i <   app.people.length; i++) {

      let tr = document.createElement("tr");
      //  let tdp = document.createElement("td");
      //  let tdn = document.createElement("td");
      tr.innerHTML = `<td>${app.people[i].firstname}</td><td>${app.people[i].surname}</td><td>${app.people[i].age}</td><td>${app.people[i].height}</td>`;

      //  let firstname = document.createTextNode(people[i].firstname);
      //  let surname = document.createTextNode(people[i].surname);
      //  tdn.appendChild(surname);
      //  tdp.appendChild(firstname);
      //  tr.appendChild(tdp);
      //  tr.appendChild(tdn);
      trcreate.appendChild(tr);

  }
  tbody.appendChild(trcreate);
};

const ready = function() {

app.update();

}

document.addEventListener("DOMContentLoaded", ready);

document.getElementById('formu').addEventListener("submit", function(e) {
    e.preventDefault();

    let fn = document.querySelector('#firstname').value;
    let ln = document.querySelector('#surname').value;
    let ag = document.querySelector('#age').value;
    let he = document.querySelector('#height').value;
console.log(fn);


    let newp = [{
        firstname: fn,
        surname: ln,
        age: ag,
        height: he
    }]
console.log(fn);
    app.people.push(newp);
    app.update();

});
