const ready = function() {
    const people = [{
        firstname: "Roberto",
        surname: "Dupuis"
    }, {
        firstname: "Julia",
        surname: "Dupont"
    }, {
        firstname: "Ezekiel",
        surname: "Duparc"
    }, {
        firstname: "Buddy",
        surname: "Dupet"
    }];
    const tbody = document.querySelector("tbody");

    let trcreate = document.createDocumentFragment();

    for (let i = 0; i < people.length; i++) {

        let tr = document.createElement("tr");
        //  let tdp = document.createElement("td");
        //  let tdn = document.createElement("td");
        tr.innerHTML = `<td>${people[i].firstname}</td><td>${people[i].surname}</td>`;

        //  let firstname = document.createTextNode(people[i].firstname);
        //  let surname = document.createTextNode(people[i].surname);
        //  tdn.appendChild(surname);
        //  tdp.appendChild(firstname);
        //  tr.appendChild(tdp);
        //  tr.appendChild(tdn);
        trcreate.appendChild(tr);

    }
    tbody.appendChild(trcreate);
}

document.addEventListener("DOMContentLoaded", ready);
