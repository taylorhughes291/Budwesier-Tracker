const url = 'https://ydu123egye.execute-api.us-west-1.amazonaws.com/default/budweiserGet';


// request options
const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
}

let response = "";
// send POST request
fetch(url, options)
    .then(res => res.json())
    .then(data => {
        uponLoad(data);
    });

function uponLoad(data) {
    let budCountMiles = document.createTextNode(data["Miles"]);
    let budCountTaylor = document.createTextNode(data["Taylor"]);
    let budCountGuests = document.createTextNode(data["Guests"]);
    console.log(data);

    var miles_buds = document.getElementById("miles-buds");
    var taylor_buds = document.getElementById("taylor-buds");
    var guests_buds = document.getElementById("guests-buds");

    var h3 = document.createElement("h3");
    var h2 = document.createElement("h3");
    var h1 = document.createElement("h3");

    h3.appendChild(budCountMiles);
    miles_buds.appendChild(h3);

    h2.appendChild(budCountTaylor);
    taylor_buds.appendChild(h2);

    h1.appendChild(budCountGuests);
    guests_buds.appendChild(h1);


}