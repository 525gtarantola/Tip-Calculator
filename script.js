function calculateAndDisplay()
{
//getting values and storing as variables//
 let bill = parseFloat(document.getElementById('totalBill').value)
 let numOfPpl = parseFloat(document.getElementById(numOfPpl).value)
 let serviceQuality = document.getElementById('serviceQuality').value

//calculate tip, total bill, and amount per person using helper functions// 
let tip = calculateTip(bill, serviceQuality)
let totalBill = calculateTotalBill(bill, tip)
let amtPerPers = calculateAmtPerPerson(totalBill, numOfPpl)
}
































/* let bill = 120
let numOfPpl = 5
let serviceQuality = 'Great'

function calculateTip (quality) {
  if (quality === 'Great') {
    return bill * 0.2
  } else if (quality === 'Good') {
    return bill * 0.15
  } else if (quality === 'Poor') {
    return bill * 0.1
  } else {
    //alert("Please enter a valid value")
  }
}

let tip = calculateTip(serviceQuality)

function calculateTotalBill (bill, tip) {
  return bill + tip
}

let totalBill = calculateTotalBill(bill, tip)

function calcAmtPerPrs (totalBill, numOfPpl) {
  return totalBill / numOfPpl
}

let amtPerPers = calcAmtPerPrs(totalBill, numOfPpl)

console.log('Tip: $' + tip)
console.log('Total Bill: $' + totalBill)
console.log('Amount per person: $' + amtPerPers) */