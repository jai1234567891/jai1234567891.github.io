//arrays
    //Name array (stores name of items)
    //amount array (stores the amount of each item)
    //location array (stores location of each item)
let item = ["ties","scissors",'wires','pliers']
let amount = [1,2,5,2]
let place = ["loc1","loc1","lo4","lo3"]

//updateAmount(updates amount based on text input)
    // updates amount in amount array based on text box input
    //requires: name of item being updated (name imported based on point in table)
function updateAmount(newAmount,itemName){
    amount[item.indexOf(itemName)] = parseInt(amount[item.indexOf(itemName)])+parseInt(newAmount)
    if (amount[item.indexOf(itemName)]<0){
        amount[item.indexOf(itemName)] = 0
    }
    return amount[item.indexOf(itemName)]
}

//addItem (adds item to arrays)
function addItem(theItem,theCount,theLocation)
{ 
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

//table creaation:
    //get elements for the table
    //set constants for document elements
    //create row+cells
        //for(i=0; i<item.legnth; i++) for loop for each column
            //create new row (create element tr)
            //for(i=0, i<=rows in init table; i++)
                //create element td
                //create cell text ()