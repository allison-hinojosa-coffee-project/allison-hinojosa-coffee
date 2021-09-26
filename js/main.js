"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
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
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
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

// function add() {
//     var input, filter, i;
//     var newCoffee = [];
//     input = document.getElementById("ownCoffee")
//     filter = input.value.toUpperCase();
//     // for (i = 0; i < coffees.length; i++) {
//     coffees.forEach(function(coffee) {
//         if (coffee.name.toUpperCase().includes(filter.toUpperCase())) {
//             newCoffee.push(coffee)
//             console.log(newCoffee)
//             tbody.innerHTML = renderCoffees(newCoffee);
//         }})
// }

function addCoffee() {
    var text = "";
    var inputs = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < inputs.length; i++) {
        text += inputs[i].value;
    }
    var own = document.createElement("ownCoffee");
    var node = document.createTextNode(text);
    own.appendChild(node);
    document.getElementById("coffees").appendChild(node);
    // var btn = document.createElement("div");
    // // btn.innerHTML = "CLICK ME";
    // document.body.appendChild(btn);
}


// function myFunction() {
//     var btn = document.createElement("BUTTON");
//     btn.innerHTML = "CLICK ME";
//     document.body.appendChild(btn);
// }


// <button onClick="addCoffee()">Try it</button>

// function addCoffee() {
// var node = document.createElement("ownCoffee");
// var textnode = document.createTextNode("input");
// node.appendChild(textnode);
// document.getElementById("coffees").appendChild(node);
// }

// <ul id="myList">
//     <li>Coffee</li>
//     <li>Tea</li>
// </ul>
//
// <button onClick="myFunction()">Try it</button>
//
// <script>
//     function myFunction() {
//     var node = document.createElement("LI");
//     var textnode = document.createTextNode("Water");
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);
// }
// </script>


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#roast-selection');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
console.log(submitButton)

console.log(renderCoffees(coffees))
// pick.addEventListener('mousedown', updateCoffees);

// .getElementById("search-box")
// .addEventListener("keyup", function() {
//     var input = coffees
//     document.getElementById("search-box");
// })