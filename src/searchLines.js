/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
const LinkedList = require("./lib/linkedList");
const data = require("./data");
// const concordance = require("./concordance");

// function searchLines(words, concordance, data) {
// let res = []
//     let curr= words
//     while(curr){
//         let word = curr.word
//         if(concordance[word]){
//             let ids = concordance(word)
//             for(let id of ids){
//                 if(id< data.length)
//                     res.push(data[id])
//             }
//         }
//     }
//     return res
// }
function searchLines(words, concordance, data) {
    if(words.head ===  null)
        return []
    let wordsMap = new Map()
    let curr= words.head
    while(curr){
        wordsMap.set(curr.word, curr.word)
       curr = curr.next
    }
    // console.log("wordsMap:",wordsMap)
    let  allIds =[]
    for(let [key, value] of Object.entries(concordance)){
        if(wordsMap.has(key))
        allIds = [...allIds, ...value]
    }
    //elena
    let res =[]
    for(let i of allIds){
        res = [...res, data[i]]
    }
    return res
}

// conc = concordance(data);
// const words = new LinkedList(["exile"]);
// let o = searchLines1(words, conc, data)

function searchLines(words, concordance, data) {
    let curr = words.head
    if(curr === null)
        return []
    let res = []
    let ids =[]
    while(curr){
        let word = curr.value
        if(concordance[word]){
            let values = concordance[word]
            if(values.length>0){
                ids =[...ids, values]
            }
        }
        curr= curr.next
    }
    for(id of ids){
        res.push(data[id])
    }
    return  res
}


 module.exports = searchLines;