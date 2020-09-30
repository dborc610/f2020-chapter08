/* add code below this */
// let billTotal = Number(prompt("Enter Bill Total: "));
const billTotals = [50, 150, 20, 500];
const tips = [];

for(let billAmount of billTotals) {
    if(!billAmount) console.error("\'" + billAmount + "\' is Not a Number Value");
    let tipAmount = (billAmount > 75) ? 0.1 : (billAmount < 30) ? 0.3 : 0.2;
    tips.push(billAmount * tipAmount);
}

for(let index = 0; index < billTotals.length; index++) {
    console.log("For bill of $" + billTotals[index] + " the tip should be $" + tips[index]);
}