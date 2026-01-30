// Select all price elements
const priceElements = document.querySelectorAll(".prices");

let total = 0;

// Calculate total price
priceElements.forEach(price => {
    total += Number(price.textContent);
});

// Create a new row
const table = document.getElementById("grocery-table");
const totalRow = document.createElement("tr");

// Create a single cell
const totalCell = document.createElement("td");
totalCell.colSpan = 2;
totalCell.textContent = "Total Price: " + total;

// Append cell to row
totalRow.appendChild(totalCell);

// Append row to table
table.appendChild(totalRow);


