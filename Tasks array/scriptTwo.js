//splice
const numbers = [10,20,30,40,50]
const arrNumbers = numbers.splice(2, 4)
console.log(numbers)
console.log(arrNumbers)

//splice
const fruits = ['apple', 'banana', 'cherry']
const arrFruits = fruits.splice(1 , 0 , 'orange','grape')
console.log(fruits)

//splice
const ages = [10, 20, 30, 40, 50]
const arrAges = ages.splice(2, 1, 35)
console.log(ages)

//splice(middle level) + findIndex
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 87 },
    { name: 'Dave', grade: 91 },
    { name: 'Eve', grade: 88 }
  ]

  const student = {
    name:'Frank',
    grade: 90,
  }

const findEve = students.findIndex((student)=> student.name==='Eve')
if(findEve !== -1){
    students[findEve].grade = 89
}
  
const newStudents = students.splice(2,1, student)

console.log(students)
console.log(newStudents)

//findIndex
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Moby Dick', author: 'Herman Melville' }
  ];

  const findBook = books.findIndex(book => book.title === '1984')
  console.log(findBook)
  if(findBook !== -1){
    books.splice(findBook, 1)
  }

  console.log(books)