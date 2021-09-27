"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name +'</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    console.log("insideofbigcoffees")
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all"){
            filteredCoffees = coffees
        }

        console.log(filteredCoffees)
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function myFunction() {
    var input, filter, i;
    var newCoffee = [];
    input = document.getElementById("myInput")
    filter = input.value.toUpperCase();
    // for (i = 0; i < coffees.length; i++) {
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(filter.toUpperCase())) {
            newCoffee.push(coffee)
            console.log(newCoffee)
            tbody.innerHTML = renderCoffees(newCoffee);
        }})

}



function addCoffee() {
    var text = "";
    var inputs = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
    var ownCoffee = document.createElement("ownCoffee");
    var typedText = document.createTextNode(text);
    ownCoffee.appendChild(typedText);
    document.getElementById("coffees").appendChild(typedText);
    var own = document.createElement("ownCoffee");
    var node = document.createTextNode(text);
    own.appendChild(node);
    document.getElementById("coffees").appendChild(node);
    // coffees.push(ownCoffee)
    // var btn = document.createElement("div");
    // // btn.innerHTML = "CLICK ME";
    // document.body.appendChild(btn);
}


// function blah() {
//     var inputs = document.querySelectorAll("input[type=text]");
//     document.getElementsByTagName("inputs")[0].setAttribute("type", "div");
// }

// function turnDiv(""){
//     var turn = document.setAttribute("")
//     for (var i = 0; i < inputs.length; i++) {
//         addCoffee += inputs[i].value;
//     }
// }

// (function() {
//     // Get the search link anchor by id
//     var searchLink = document.getElementById("search-link");
//     searchLink.setAttribute("class", "btn btn-default");
// })();



// function myFunction() {
//     var btn = document.createElement("BUTTON");
//     btn.innerHTML = "CLICK ME";
//     document.body.appendChild(btn);
// }


var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#roast-selection');
var submitButton = document.querySelector('#ownCoffee');
var roastSelection = document.querySelector('#roast-selection');
var selectRoastButton = document.querySelector('#newRoast');
// var restart = document.querySelector('.originalList');
// var restart = document.querySelector('#originalList');


tbody.innerHTML = renderCoffees(coffees);

// roastSelection.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', addCoffee);
selectRoastButton.addEventListener('click', updateCoffees)
// restart.addEventListener('click', renderCoffee)



console.log(submitButton)

console.log(renderCoffees(coffees))
// pick.addEventListener('mousedown', updateCoffees);

// .getElementById("search-box")
// .addEventListener("keyup", function() {
//     var input = coffees
//     document.getElementById("search-box");
// })