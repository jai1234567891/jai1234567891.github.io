//variable for current sorting status
let sorter="none"

//Sorts by name 
    /*Checks current sorting style, if sorted by alpha ascend change to reverse, if reverse cancel sort
    if none sort ascend 
    ascend: numbers smallest to largest, Goes first letter, then second letter, then third, ect. until no change in 2 passes, sort via minimum
    reversed: reverse alpha sort (last starts, ends with first)
    none: general display*/
    //Sort by alpha
    //input: item, amount, location arrays
    //output: returns the sorted array, or cancels sort
    
function alphaSort(theItem,theAmount,theLocation){
    /*let attempt = document.createElement("p")
    attempt.textContent(`$sorter`)
    let tp = document.body
    tp.appendChild(attempt)*/
    //if SORTER = alpha (currently sorted alphabetically)
        //then: create 3 new arrays, forloop -> i=item.length, i>0, i--
            // newItem.push(item array at i)
            // newAmount.push(amount array at i)
            // newLocation.push (loc array at i)
        //set sorter to reversed alphabetical 
        //return 3 new arrays
    if (sorter === "alphabetical"){ //if sorted alphabetical already, change to reversed
        sorter="none"
        let output=[]
        output = alphaSort(theItem,theAmount,theLocation)
        let reverseItem = output[0]
        let reverseAmount = output[1]
        let reverseLocation = output[2]
        let newItem = []
        let newAmount = []
        let newLocation = []
        for(let i = reverseItem.length-1; i>=0; i--){
            newItem.push(reverseItem.at(i))
            newAmount.push(reverseAmount.at(i))
            newLocation.push(reverseLocation.at(i))
        }
        sorter = "reversed"
        return [newItem,newAmount,newLocation]
    }
    
    //else if SORTER = reversed (currently sorted reversed)
    //then:
    //set sorter to none
    //return initial arrays
    else if (sorter==="reversed"){
        sorter = "none"
        return [theItem, theAmount, theLocation]
    }
    
    //else (currently not sorted or some other sort)
    //create new arrays
    //then:
    //for i=0, i<=legnth of array, i++
        //if(begins with number)
            //number array.push item.at(i)
        //else
            //letterarry.push(item.at(i))
    //newitemarray.push(numberarray(by number(difference between a and b)).sort)
    //newitemarray.push(letterarray.sort)
    //for i=0, i<=length of array, i++
        //newamountarray.push(amount.at(items.indexOf(newitemarray.at(i)))
        //newlocarray.push(location.at(items.indexOf(newitemarray.at(i)))
    //set sorter to alphabetical
    //return 3 new arrays
    else{
        let newItem = []
        let newAmount = []
        let newLocation = []
        let numberItem = []
        let letterItem = []
        let number = []
        let sortedNumber = []
        for(let i = 0; i<theItem.length; i++){
            if(theItem[i].startsWith("1")||theItem[i].startsWith("2")||theItem[i].startsWith("3")||theItem[i].startsWith("4")||item[i].startsWith("5")||item[i].startsWith("6")||
            theItem[i].startsWith("7")||theItem[i].startsWith("8")||theItem[i].startsWith("9")||theItem[i].startsWith("0")){
                numberItem.push(theItem.at(i))
            }
            else{
                letterItem.push(theItem[i])
            }
        }
        //Isolating the numbers, converting to decimal if presented in fraction
        for(let i = 0; i<numberItem.length; i++){
            if(numberItem[i].includes("/")){
                let slash = 0
                slash = numberItem[i].indexOf("/")
                let indexs = 0
                for(let a = 0; a<=9; a++){
                    if (numberItem[i].indexOf(a.toString())>indexs){
                        indexs = numberItem[i].indexOf(a.toString())    //sets indexs to highest index value of a number
                    }
                }
                number.push(numberItem[i].substring(0,slash)/numberItem[i].substring(slash+1,indexs+1)) //converts frac to decimal and adds it
            }
            else{ //doesnt include "/"
                let indexs = 0
                for(let a = 0; a<=9; a++){
                    if (numberItem[i].indexOf(a.toString())>indexs){
                        indexs = numberItem[i].indexOf(a.toString())    //sets indexs to highest index value of a number
                    }
                }
                number.push(numberItem[i].substring(0,indexs+1))
            }
        }
        sortedNumber = number.toSorted((a,b) => a-b) //sorts by smallest to largest
        //find sorted number in index of number, get value of numberItem at that index, find that value in main, search main arrays at 
        //that index, put those values into new arrays so that numbers come first
        for(let i=0; i<numberItem.length; i++){
            let index = 0
            index = number.indexOf(sortedNumber.at(i)) //get index of sorted number in number
            index = theItem.indexOf(numberItem.at(index))
            newItem.push(theItem.at(index))
            newAmount.push(theAmount.at(index))
            newLocation.push(theLocation.at(index))
        }
        //add in sorted items
        let theSorted = letterItem.toSorted();
        for(let i=0; i<letterItem.length;i++){
            let index = 0
            index = letterItem.indexOf((theSorted.at(i)))
            index = theItem.indexOf(letterItem[index])
            newItem.push(theItem.at(index))
            newAmount.push(theAmount.at(index))
            newLocation.push(theLocation.at(index))
        }
        sorter = "alphabetical"
        return [newItem,newAmount,newLocation]
    }
}
    
    
    //Sorts by number
        /*Checks current sorting style, if sorted by number smallest change to largest, if largest cancel sort
        if none sort smallest
        smallest: smallest number first, change by min value (if same amount sort by alpha)
        largest: largest number first, change by max value (if same amount sort by alpha)
        After sorting finds the amount of each item in original array and gets index value, uses this for other 2
        arrays*/
    
    //if sorter = smallest (smallest put first)
        //then: create 3 new arrays, forloop -> i=item.length, i>0, i--
            // newItem.push(item array at i)
            // newAmount.push(amount array at i)
            // newLocation.push (loc array at i)
        //set sorter to largest 
        //return 3 new arrays
    function numberSort (theItem, theAmount, theLocation){
        if (sorter === "smallest"){
            sorter="none"
            let output=[]
            output = numberSort(theItem,theAmount,theLocation)
            let reverseItem = output[0]
            let reverseAmount = output[1]
            let reverseLocation = output[2]
            let newItem = []
            let newAmount = []
            let newLocation = []
            for(let i = (reverseItem.length-1); i>=0; i--){
                newItem.push(reverseItem.at(i))
                newAmount.push(reverseAmount.at(i))
                newLocation.push(reverseLocation.at(i))
            }
            sorter = "largest"
            return [newItem, newAmount, newLocation]
        }
    
        //else if SORTER = largest (currently sorted largest)
        //then: 
        //set sorter to none
        //return initial arrays
        else if (sorter === "largest"){
            sorter = "none"
            return [theItem, theAmount, theLocation]
        }
    
        //else (currently not sorted or some other sort)
        //create new arrays
        //then:
        //newamountarray.push(amount.tosort(a,b(difference (a-b)))
        //for i=0, i<=length of array, i++
            //newitemarray.push(amount.at(amount.indexOf(newamountarry.at(i)))
            //newlocarray.push(location.at(amount.indexOf(newamountarray.at(i)))
        //set sorter to smallest
        //return 3 new arrays 
        else{
            let newItem = []
            let newAmount = []
            let newLocation =[]
            newAmount = theAmount.toSorted((a,b) => a-b)
            for (let i=0; i<theAmount.length; i++){
                let index = 0
                let itemCut = theItem
                let numberCut = theAmount
                for (let a=0; a<i; a++){//getting how many of each amount there are
                    if(newAmount[a] == newAmount[i]){
                        index += 1
                    }
                }
                if(index>0){
                    for (let a=0; a<index; a++){
                        itemCut = theItem.slice(1+numberCut.indexOf(newAmount[i]))
                        numberCut = theAmount.slice(1+numberCut.indexOf(newAmount[i]))
                    }
                }
                currentItem = itemCut.at(numberCut.indexOf(newAmount[i]))
                newItem.push(currentItem)
                newLocation.push(theLocation.at(theItem.indexOf(currentItem))) //gets index of item in main array for finding position
            }
            sorter = "smallest"
            return [newItem, newAmount, newLocation]
        }
        }

    
    //Sorts by location
        //same as alpha sorter but location array instead of name array
    
    function locationSort(theItem,theAmount,theLocation){
        if(sorter === "alphabetically by location"){ //already sorted alpha by loc, so needs to be reversed
            //reverse locations, then run sort by alpha 
            let newItem = []
            let newAmount = []
            let newLocation =[]
            let returned = []
            sorter = "none" // allows for calling to sort by alphabetical
            //get all locations
            //for i=length-1, i>=0, i--
                //if !(sortLocations.includes(locations.at(i)) -> does not include current location in list
                    //sortlocations.push(location.at(i))
            //sortlocations.sort()
            let sortLocations = []
            for (let i = theLocation.length-1; i>=0; i--){
                if (!sortLocations.includes(theLocation[i])){
                        sortLocations.push(theLocation[i])
                }
            }
            sortLocations.sort().reverse() //revsers the sort
            for(let i=0; i<sortLocations.length;i++){
                sorter = "none"
                let currentItem = []
                let currentAmount = []
                let currentLocation = []
                for(let a=0; a<theLocation.length;a++){
                    if(sortLocations[i] === theLocation[a]){
                        currentItem.push(theItem.at(a))
                        currentAmount.push(theAmount.at(a))
                        currentLocation.push(theLocation.at(a))
                    }
                }
                
                //sort currentLocation alphabetically, add them to newItem, newAmount, newLocation, then move on to next alphabetical location

                returned = alphaSort(currentItem,currentAmount,currentLocation)
                let sortedLocations = []
                let sortedItems = []
                let sortedAmount = []
                sortedItems = returned[0]
                sortedAmount = returned[1]
                sortedLocations = returned[2]
                for (let a = 0; a<sortedItems.length; a++){
                    newItem.push(sortedItems[a])
                    newAmount.push(sortedAmount[a])
                    newLocation.push(sortedLocations[a])
                }
            }
            sorter = "reversed alphabetically by location"
            return[newItem,newAmount,newLocation]
        }
        
        //unsort
        else if(sorter === "reversed alphabetically by location"){
            sorter = "none"
            return [theItem, theAmount, theLocation]
        }
    
        //sort alpha by location, then sort each location by alpha
        else{
            let newItem = []
            let newAmount = []
            let newLocation =[]
            let returned = []
            sorter = "none" // allows for calling to sort by alphabetical
            //get all locations
            //for i=0, i<=length, i++
                //if !(sortLocations.includes(locations.at(i)) -> does not include current location in list
                    //sortlocations.push(location.at(i))
                //sortlocations.sort()
            let sortLocations = []
            for (let i =0; i<theLocation.length; i++){
                if (!sortLocations.includes(theLocation[i])){
                    sortLocations.push(theLocation[i])
                }
            }
            sortLocations.sort()
            //console.log(sortLocations)
            //having sorted locations by alpha, need to get all values with that location, and sort them alphabetically, then push to final arrays in order
            for(let i=0; i<sortLocations.length;i++){
                sorter = "none"
                let currentItem = []
                let currentAmount = []
                let currentLocation = []
                for(let a=0; a<theLocation.length;a++){
                    if(sortLocations[i] === theLocation[a]){
                        currentItem.push(theItem.at(a))
                        currentAmount.push(theAmount.at(a))
                        currentLocation.push(theLocation.at(a))
                    }
                }
                
                //sort currentLocation alphabetically, add them to newItem, newAmount, newLocation, then move on to next alphabetical location

                returned = alphaSort(currentItem,currentAmount,currentLocation)
                let sortedLocations = []
                let sortedItems = []
                let sortedAmount = []
                sortedItems = returned[0]
                sortedAmount = returned[1]
                sortedLocations = returned[2]
                for (let a = 0; a<sortedItems.length; a++){
                    newItem.push(sortedItems[a])
                    newAmount.push(sortedAmount[a])
                    newLocation.push(sortedLocations[a])
                }
            }
            sorter = "alphabetically by location"
            return[newItem,newAmount,newLocation]
        }
    }            
    //Search bar
        //for length of array, see if item name or location includes key, if true: get index (loop counter)
        //for the set of items, put into new arrays, displays arrays
        //pre: item,amount,location all of current array displayed (not initial)
        //fucntion search(textboxstring)
            //create filtitem,filtamount,filtloc,
            //for i=0; i<item.length; i++
                //if(item.includes(textboxstring)||location.includes(textboxstring))
                    //filtitem = item.at(i)
                    //filtamount = amount.at(i)
                    //filtloc = amount.at(i)
            //return filtitemarray,filtamountarray,filtlocarray
    function searchBar(theItem,theAmount,theLocation,key){
        let newItem = []
        let newAmount = []
        let newLocation = []
        for(let i = 0; i<theItem.length; i++){
            if (theItem[i].includes(key)||theLocation[i].includes(key)){
                newItem.push(theItem[i])
                newAmount.push(theAmount[i])
                newLocation.push(theLocation[i])
            }
        }
        return [newItem, newAmount, newLocation]
    }