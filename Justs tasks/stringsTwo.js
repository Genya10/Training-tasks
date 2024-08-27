//CharAt, CharCodeAt, concat, replace, replaceAll, indexOf, lastIndeOf, includes,
//////////////////////////////
let str = "Hello";
console.log(str.charCodeAt(4));
////////////////////////////////
const str1 = "My friend, i miss with you"
console.log(str1.charCodeAt(1))

////////////////////////////////
function concatString(str1, str2, str3){
  let result = str1.concat('/',str2, str3)
  return result
}

console.log(concatString('Hello', 'world', ' and people'))

////////////////////////////////////
const str4 = "Hello world, i love world"
const newStr4 = str4.replaceAll('world', 'people')
const newRepl = str4.replace('world','guys')
console.log(newStr4)
console.log(newRepl)

////////////////////////////////////
function removeChar(text, charToRemove){
    return text.replaceAll(charToRemove,'+')
}
const text = "Hello , people, hello , world"
const charToRemove = ","
const result = removeChar(text, charToRemove)
console.log(result)

//////////////////////////////////////
const str5 = 'Hello world, i love world and world is the best'
function fintIncludes(){
  return str5.includes('world',30)
}
console.log(fintIncludes())
console.log(str5.charAt(40))

//////////////////////////////////////
function replaceSentence(sentence, word){
  return sentence.replaceAll(word, 'magazine')
}
const buyBook = 'You need to buy book in this shop.This book about people'
const partSentence = 'book'
console.log(replaceSentence(buyBook, partSentence))

//////////////////////////////////////