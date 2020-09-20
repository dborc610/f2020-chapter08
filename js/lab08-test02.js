/* add code below this */
let billTotal = Number(prompt("Enter Bill Total: "));
if(billTotal) {
    const tipAmt = 0.1;
    let calcTip = billTotal * tipAmt;
    console.log("For bill of $" + billTotal + " the tip should be $" +calcTip);
} else {
    console.error("Not a Number Value"); 
}

