///////////////////////////////
const str1 = "Hello, JavaScript World!"
const startIndex = str1.indexOf('JavaScript')
const endIndex = startIndex + 'Javascript'.length
console.log(endIndex)
const strSlice = str1.slice(startIndex, endIndex)
console.log(strSlice)

////////////////////////////////
const str2 = "Learn JavaScript with fun!"
const startIndex2 = str2.indexOf('JavaScript')
console.log(startIndex2)
const endIndex2 = startIndex2 + 'JavaScript with'.length
const strSubstring = str2.substring(startIndex2, endIndex2)
console.log(strSubstring)

////////////////////////////////
const str3 = "apple,banana,cherry,date"
const strSplit = str3.split()
console.log(strSplit)

///////////////////////////////
const str4 = ' Hello, World! '
console.log(str4.trim())

///////////////////////
const str5 = 'Hello, javascript!'
console.log(str5.startsWith("Hello"))

///////////////////////
const str6 = 'The quick brown fox jumps over the lazy dog'
console.log(str6.endsWith('dog'))

////////////////////////
const str7 = '42'
console.log(str7.padStart(5,'0'))

/////////////////////////
const str8 = 'cve'
console.log(str8.padEnd(10,' isgood'))