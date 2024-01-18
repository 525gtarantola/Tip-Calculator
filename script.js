let bill = 120
let numOfPpl = 5
let serviceQuality = 'Great'

function calculateTip(quality) {
    if(quality === 'great'){
        return bill * 0.2
    } else if (quality === 'Good'){
        return bill * 0.15
    } else if (quality === 'Poor'){
        return bill * 0.1
    } else {
    
    }
}

let tip = calculateTip(serviceQuality)

function calculateTotalBill(bill,tip){
    return bill + tip 
}

let totalBill = calculateTotalBill(bill, tip)
    function calcAmtPpl(totalBill, numOfPpl){
        return totalBill / numOfPpl
    }

let amtPerPers = calcAmtPpl(totalBill, numOfPpl)

console.log('Tip: $' + tip)
console.log('Total Bill: $' + totalBill);
console.log('Amount per person: $' + amtPerPers);
