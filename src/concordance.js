/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/
function concordance(data) {
  if(data.length=== 0)
   return {}
  let map = new Map()
  for(let i=0 ; i < data.length;i++){
    let sentence = data[i]
    let words = sentence.split(/[\s.,';]/)
    if(words.length>0){
      for(let word of words){
       if(word.length>0){
        if(!map.has(word)){
         map.set(word, [i])
        }
        else{
         map.get(word).push(i)
        }
       }
      }
    }
  }
  for(let [key, value] of map.entries()){
     map.set(key, [...value])
  }
  return Object.fromEntries(map)
}


 module.exports = concordance;