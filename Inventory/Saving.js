//Goal: be able to save data from all 3 arrays on the wesbite
    //cannot use local storage (needs to be accessed form multiple devices)
    // attempt to write to a file saved on website (via save button)

import {Octokit} from "https://esm.sh/octokit";

//SaveFucntion
    //Overwrite Data.txt with new information
        //Item, amount, place as their own arrays combined into 1
        //delete data.txt
        //recreate data.txt with new info

    //Push new file of Data.txt to github    
        //authenicate GitHub user as me in order to authorize the push of the commits
        //create new commit, reason being update inventory
        //push new commit, sync changes
    
    //decoding personal authication key to allow for access into repository to rewrite file
function getKey(){
    let decodedKey = "g11h11p11_11g11911w11T11r11A11z11T11p11211111u11g11411y11911l11R11Y11V11o11311n11P11A11s11n11R11G11g11111311511g11711A11"
    let key = ""
    for (let i=0; i<decodedKey.length/3; i++){
        key = key.concat(decodedKey.charAt(i*3))
    }
    return key
}

    //getting data.txt from the repository to be able to edit
        //Uses an octoKit with REST API, authentication with personal key in order to access repository
async function getSave(){
    const octokit = new Octokit({
        auth: getKey()
    });
    let saveFile = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', { // sends a GET request for the file
        owner: 'jai1234567891',
        repo: 'jai1234567891.github.io',
        path: 'Inventory/Data.txt',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    return saveFile
}

//editing file gotten from getSave
    //get the value of the current contents
    //rewrite current contents with current values of item, amount, place
    //make a new commit with the updated file
export async function editFile(theItem, theAmount, thePlace){
    let dataBox = await getSave() //gets the file to be editted
    let dataKey=Object.values(dataBox)[3] //get the value of the contents 
    const octokit = new Octokit({
        auth: getKey()
    });
    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', { //sends a PUT request to API to make a new commit
        owner: 'jai1234567891',
        repo: 'jai1234567891.github.io',
        path: 'Inventory/Data.txt',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        },
        message : "updated inventory",
        content : btoa("["+theItem+"]"+"["+theAmount+"]"+"["+thePlace+"]"),
        sha: Object.values(dataKey)[2],
    })
}