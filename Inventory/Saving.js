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
async function getKey(){
    const octokit = new Octokit()
    let tet = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'jai1234567891',
        repo: 'testing',
        path: 'testFIle',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    let dataFile = Object.values(tet)[3]
    let dataKey = Object.values(dataFile)[9]
    let decodedKey = atob(dataKey)
    let key = ""
    for (let i=0; i<decodedKey.length/3; i++){
        key = key.concat(decodedKey.charAt(i*3))
    }
    return key
}

async function getSave(){
    const octokit = new Octokit({
        auth: await getKey()
    });
    let tet = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'jai1234567891',
        repo: 'jai1234567891.github.io',
        path: 'Inventory/Data.txt',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    return tet
}

export async function editFile(theItem, theAmount, thePlace){
    let dataDox = await getSave()
    let dataKey=Object.values(dataDox)[3]
    const octokit = new Octokit({
        auth: await getKey()
    });
    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
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