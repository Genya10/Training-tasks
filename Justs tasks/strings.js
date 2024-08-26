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

//////////////////////////////////////////
const text2 = 'You need to buy book in this shop.This book about people'
const text2Replace = text2.replace(/book/g, 'magazine')
console.log(text2Replace)

//////////////////////////////////////////
const text3 = 'You need to buy book in this shop.This book about people';

function text3Includes(){
   let result;
   if(text3.includes('book')){
      console.log('There is a book')
   } else {
      console.log('Book is not found')
   }
}

text3Includes()

/////////////////////////////////////////
function findChar(word){
  return word.charAt(7)
}
console.log(findChar('Bill the biggest man'))

////////////////////////////////////////
const text4 = 'I can help you and buy this book and then i am happy'

console.log(text4.indexOf('this'))
console.log(text4.indexOf('b',20))
console.log(text4.lastIndexOf('y'))
console.log(text4.lastIndexOf('y',30))
console.log(text4.indexOf('v'))

////////////////////////////////////////////
  function findSubStr(str, word){
   return str.indexOf(word, 20)
 }

 const sentence = 'Finding the last occurrence of a character or substring.'
 const letter = 'a'

 console.log(findSubStr(sentence, letter))