//arrays
    //Name array (stores name of items)
    //amount array (stores the amount of each item)
    //location array (stores location of each item)
let item = []
let place = []
let amount = []

//updateAmount(updates amount based on text input)
    //updates amount in amount array based on text box input
    //requires: name of item being updated (name imported based on point in table)
    //converts current amount to a number, and the input to a number then adds/subtracts them
    //if it would leave it with value below 0, set value to 0, return the new amount
function updateAmount(newAmount,itemName){
    if(typeof newAmount === "number"){
        amount[item.indexOf(itemName)] = parseInt(amount[item.indexOf(itemName)])+parseInt(newAmount)
        if (amount[item.indexOf(itemName)]<0){
            amount[item.indexOf(itemName)] = 0
        }
    }
    return amount[item.indexOf(itemName).toString()]
}

//addItem (adds item to arrays)
function addItem(theItem,theCount,theLocation){ 
    item.push(theItem)
    amount.push(parseInt(theCount))
    place.push(theLocation)
}

//remove item (removes item from array)
    //splice it out
    //get item name, find it in list (or potentially just get it from the row # if possible)
        //item.splice(index,index)
        //item.splice(index,index)
        //item.splice(index,index)
function removeItem(itemName){
    item.splice(item.indexOf(itemName),1)
    amount.splice(item.indexOf(itemName),1)
    place.splice(item.indexOf(itemName),1)
}

//parseData -> parsing the data to save as the arrays
    //splice out each array (split off by []), removing it from the intial array
    //then get each item out of each array (for loop based on amount of ,), removing it and pushing it into its proper array

function parseData(theData){
    let itemArray = []
    let amountArray = []
    let locationArray = []
    let totalArray = []
    //splits the original based on ] to get each array
    totalArray = theData.split("]")
    itemArray.push(totalArray[0])
    amountArray.push(totalArray[1])
    locationArray.push(totalArray[2])
    //for each array and for their length, go through and push each item to the proper array
    for(let a=0; a<3; a++){
        if(a===0){ // first time so getting it for the itemArray
            itemArray = itemArray.toString() // converting to a string from the array
            let itemAmounts = []
            itemAmounts = itemArray.split(",")
            itemAmounts[0] = itemAmounts[0].toString().substring(1) //removing the open bracket at the start
            for(let i=0; i<itemAmounts.length; i++){ //gets the length of the array then adds each item into the final array
                item.push(itemAmounts[i])
            }
        }

        else if(a===1){ // first time so getting it for the itemArray
            amountArray = amountArray.toString() // converting to a string from the array
            let numberAmount = []
            numberAmount = amountArray.split(",")
            numberAmount[0] = numberAmount[0].toString().substring(1) //removing the open bracket at the start
            for(let i=0; i<numberAmount.length; i++){ //gets the length of the array then adds each item into the final array
                amount.push(parseInt(numberAmount[i]))
            }
        }

        else{ // first time so getting it for the itemArray
            locationArray = locationArray.toString() // converting to a string from the array
            let locationAmounts = []
            locationAmounts = locationArray.split(",")
            locationAmounts[0] = locationAmounts[0].toString().substring(1) //removing the open bracket at the start
            for(let i=0; i<locationAmounts.length; i++){ //gets the length of the array then adds each item into the final array
                place.push(locationAmounts[i])
            }
        }
    }
    return
}