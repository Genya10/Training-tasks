/////////////////////////////////////////////
function toUpperCaseFirstLetter(message){
   let result = message.charAt(3).toUpperCase()

  return result
}

console.log(toUpperCaseFirstLetter("hello world"))
console.log(toUpperCaseFirstLetter("everybody at home"))

//////////////////////////////////////////////
function replaceWord(str){
 return str.replace(/foo/g, 'barcony')
}

console.log(replaceWord("foo is better than foo"))
console.log(replaceWord("hello foo world"))

//////////////////////////////////////////
const text = 'Hello guys, everybody at home';
const textReplace = text.replace('guys', 'friends')
console.log(textReplace)

////////////////////////////////////////
function findWordPosition(str, word){
 return str.indexOf(word)
}
console.log(findWordPosition("hello world", "world"))
console.log(findWordPosition("hello world", "foo"))

/////////////////////////////////////////
function containsSubstring(str, substr){
   return str.indexOf(substr) !== -1
}
console.log(containsSubstring("example text", "text"))
console.log(containsSubstring("example text", "missing"))