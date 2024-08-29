//find\
const arr1 = [2,4,6,8,10,12,14,16]
const arrFind = arr1.find(num => num > 10)
console.log(arrFind)

//filter 
const arr2 = [2,4,6,8,10,12,14,16]
const arrFilter = arr2.filter(num => num > 10)
console.log(arrFilter)

//find
const products = [
{ name: "Apple", price: 3 },
{ name: "Banana", price: 1 },
{ name: "Orange", price: 6 },
{ name: "Grapes", price: 8 }
]

const findProduct = products.find(obj => obj.price > 5)
console.log(findProduct)

//find
  const employees = [
    { id: 1, name: "Alice", department: "Finance" },
    { id: 2, name: "Bob", department: "HR" },
    { id: 3, name: "Charlie", department: "IT" },
    { id: 4, name: "Diana", department: "HR" }
  ];

  const findEmployee = employees.find(obj => obj.department === 'HR')
  console.log(findEmployee)

//find
const orders = [
    { orderId: 998, customerName: "Alice", status: "completed" },
    { orderId: 1001, customerName: "Bob", status: "pending" },
    { orderId: 1005, customerName: "Charlie", status: "shipped" },
    { orderId: 1020, customerName: "Diana", status: "pending" }
  ];

const findOrder = orders.find(obj => obj.status === 'pending' && obj.orderId > 1000)
console.log(findOrder.customerName)

// or
    if(findOrder){
        console.log(findOrder.customerName)
    }


//filter
const arrNumbers = [2,5,7,8,10,6,11,24,9]
const arrFilter1 = arrNumbers.filter(num => num %2 === 0)
console.log(arrFilter1)

//filter
const books = [
    { title: "Book A", author: "Author 1", year: 2005 },
    { title: "Book B", author: "Author 2", year: 2012 },
    { title: "Book C", author: "Author 3", year: 2018 },
    { title: "Book D", author: "Author 4", year: 2009 },
    { title: "Book E", author: "Author 5", year: 2015 }
  ];

const filterBooks = books.filter(book => book.year > 2010)
console.log(filterBooks.reverse())

//filter
const employees1 = [
    { id: 1, name: "Alice", department: "Sales", salary: 55000 },
    { id: 2, name: "Bob", department: "HR", salary: 45000 },
    { id: 3, name: "Charlie", department: "Marketing", salary: 60000 },
    { id: 4, name: "Diana", department: "Sales", salary: 48000 },
    { id: 5, name: "Edward", department: "Marketing", salary: 70000 },
    { id: 6, name: "Fiona", department: "IT", salary: 65000 }
  ];

const employee = employees1.filter(obj => obj.department === 'Sales' 
  | obj.department === 'Marketing' && obj.salary > 50000)
  console.log(employee)

//filter in function
let items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Chair", category: "Furniture", price: 150 },
    { id: 3, name: "Phone", category: "Electronics", price: 700 },
    { id: 4, name: "Table", category: "Furniture", price: 250 },
    { id: 5, name: "Lamp", category: "Home", price: 50 },
    { id: 6, name: "Monitor", category: "Electronics", price: 300 }
  ];

function filterItems(items){
 return items.filter(item => item.category === 'Electronics' 
        | item.category === 'Furniture' && item.price > 100)
}

console.log(filterItems(items))