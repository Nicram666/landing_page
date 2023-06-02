function checkCashRegister(price, cash, cid) {
  let change = cash - price
  let inintialChange = cash - price
  let sumOfCash = 0
  let cidLength = cid.length -1
  let divider = 0
  let resultArr = []
  let physicalCash = cid
  

for (let i = cidLength; i >=0; i--) {
  sumOfCash += cid[i][1]
}


if (sumOfCash < change ) {
 return ({status: "INSUFFICIENT_FUNDS",
    change: []})
} 
else if (sumOfCash > change) {

for (let i = cidLength; i >=0; i--) {
  const val = cid[i][0];
  switch (val){
    case "PENNY":
    divider = 0.01
    break;
    case "NICKEL":
    divider = 0.05
    break;
    case "DIME":
    divider = 0.1
    break;
    case "QUARTER":
    divider = 0.25
    break;
    case "ONE":
    divider = 1;
    break;
    case "FIVE":
    divider = 5
    break;
    case "TEN":
    divider = 10
    break;
    case "TWENTY":
    divider = 20
    break;
    case "ONE HUNDRED":
    divider = 100
    break;

    }
    if (change - divider >= 0) {
      let tempVal = 0;
      while (change - divider >= 0 && physicalCash[i][1] - divider >= 0 ) {
        tempVal += divider
        change = parseFloat((change-divider).toFixed(2))
        physicalCash[i][1] -= divider
      }
      resultArr.push([val, tempVal])
      
    } 
}
let sum = 0;
resultArr.forEach(elem=>{sum += elem[1]});
console.log(sum)
console.log(inintialChange)

if(sum < inintialChange) {
  return ({status: "INSUFFICIENT_FUNDS",
    change: []})
}
else {
return ({status: "OPEN",
    change: resultArr})
}


  
} else if (sumOfCash = change) {

for (let i = cidLength; i >=0; i--) {
  let tempVal = 0;
  const val = cid[i][0];
  switch (val){
    case "PENNY":
    divider = 0.01
    break;
    case "NICKEL":
    divider = 0.05
    break;
    case "DIME":
    divider = 0.1
    break;
    case "QUARTER":
    divider = 0.25
    break;
    case "ONE":
    divider = 1;
    break;
    case "FIVE":
    divider = 5
    break;
    case "TEN":
    divider = 10
    break;
    case "TWENTY":
    divider = 20
    break;
    case "ONE HUNDRED":
    divider = 100
    break;
    }
    if (change - divider >= 0) {
      tempVal = 0;
      while (change - divider >= 0 && physicalCash[i][1] - divider >= 0 ) {
        
 tempVal = parseFloat((tempVal+divider).toFixed(2));
          change = parseFloat((change-divider).toFixed(2));
      }
     
      
    }
    resultArr.unshift([val, tempVal])

}


return ({status: "CLOSED",
    change: resultArr})
  
}
}

console.log(checkCashRegister(18, 20, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 10], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))