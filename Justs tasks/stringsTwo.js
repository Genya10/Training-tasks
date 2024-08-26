//////////////////////////////
let str = "Hello";
console.log(str.charCodeAt(4));
////////////////////////////////
const str1 = "My friend, i miss with you"
console.log(str1.charCodeAt(1))

////////////////////////////////
function concatString(str1, str2, str3){
  let result = str1.concat('/',str, str3)
  return result
}

console.log(concatString('Hello', 'world', ' and people'))

////////////////////////////////////
const str4 = "Hello world, i love world"
const newStr4 = str4.replaceAll('world', 'people')
console.log(newStr4)

////////////////////////////////////
function removeChar(text, charToRemove){
    return text.replaceAll(charToRemove,'')
}
const text = "Hello , people, hello , world"
const charToRemove = ","
const result = removeChar(text, charToRemove)
console.log(result)