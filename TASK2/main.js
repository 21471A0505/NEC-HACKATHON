var expenses = [];

document.getElementById("expense-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var item = document.getElementById("item").value;   
    var amount = document.getElementById("amount").value;
    var category = document.getElementById("category").value;
    var date = document.getElementById("date").value;
    expenses.push({item:item, amount: amount, category: category, date: date });
    updateTable();
});

function updateTable() {
    var tbody = document.getElementById("expense-table").getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    for (var i = 0; i < expenses.length; i++) {
        var row = tbody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = expenses[i].item;
        cell2.innerHTML = expenses[i].amount;
        cell3.innerHTML = expenses[i].category;
        cell4.innerHTML = expenses[i].date;
        cell5.innerHTML = "<button onclick='deleteExpense(" + i + ")'>Delete</button>";
        
    }
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateTable();
}

function totalExpenses() {
    var total = 0;
    for (var i = 0; i < expenses.length; i++) {
        total += parseFloat(expenses[i].amount);
    }
    console.log(total);
    return total;
}








