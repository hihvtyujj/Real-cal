document.addEventListener("DOMContentLoaded", function() { const display = document.getElementById("display");

window.appendValue = function(value) {
    display.value += value;
};

window.clearDisplay = function() {
    display.value = "";
};

window.calculate = function() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
};

window.convertLength = function() {
    let meters = prompt("Enter meters:");
    alert(`${meters} meters is ${(meters * 3.281).toFixed(2)} feet`);
};

window.convertWeight = function() {
    let kg = prompt("Enter kg:");
    alert(`${kg} kg is ${(kg * 2.205).toFixed(2)} lbs`);
};

window.convertCurrency = function() {
    let npr = prompt("Enter amount in NPR:");
    alert(`${npr} NPR is ${(npr / 130).toFixed(2)} USD`);
};

window.calculateTip = function() {
    let amount = prompt("Enter bill amount:");
    let tip = prompt("Enter tip percentage:");
    alert(`Tip: ${(amount * tip / 100).toFixed(2)}`);
};

});

