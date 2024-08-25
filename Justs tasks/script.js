function getSubstring(string, length){
  const substring = string.slice(2, length)

  return substring
}

console.log(getSubstring("Hi, Jonhy, how are yoy?", 8))
console.log(getSubstring("Hi, Jonhy, how are yoy?", 12))
console.log(getSubstring("Hi, Jonhy, how are yoy?", 3))

///////////////////////////////////////////////////////
function formatMessage(message, maxLength){
    let result;
    if(message.length <= maxLength){
        result = message
    } else {
        result  = message.slice(0, maxLength) + '...'
    }
    return result
}

console.log(formatMessage('Hi, Jonhy, how are you?', 14))
console.log(formatMessage('Hi, Jonhy, how are you?', 33))

///////////////////////////////////////
function checkForName(fullName, name){
 const result = fullName.includes(name)
  return result;
}

console.log(checkForName('Kuzyashev Yevhen', 'Yevhen'))
console.log(checkForName('Kuzyashev Jenya', 'Alex'))

////////////////////////////////////////
function checkForSpam(message) {
    let result;
    let lowerCase = message.toLowerCase()

       if(lowerCase.includes('spam')|| lowerCase.includes('sale')){
         result = true
       } else {
         result = false
       }
        // Change code above this line
        return result;
      }


  console.log( checkForSpam("Latest technology news"))
  console.log( checkForSpam("Get best Sale offers now!"))
  console.log(checkForSpam("Trust me, this is not a spam message"))