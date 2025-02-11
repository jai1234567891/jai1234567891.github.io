//arrays
    //Name array (stores name of items)
    //amount array (stores the amount of each item)
    //location array (stores location of each item)
let item = []
let amount = []
let location = []

//updateAmount(updates amount based on text input)
    // updates amount in amount array based on text box input
    //requires: name of item being updated (name imported based on point in table)
function updateAmount(newAmount,itemName){
    amount.at(item.indexOf(itemName)) = newAmount
}

//addItem (adds item to arrays)
function addItem(theItem,theCount,theLocation)
{ 
    item.push(theItem)
    amount.push(theCount)
    location.push(theLocation)
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
    location.splice(item.indexOf(itemName),1)
}
