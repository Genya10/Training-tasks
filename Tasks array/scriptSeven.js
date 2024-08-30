//find
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" }
]

console.log(users.find(user => user.id === 3))

//filter
const products = [
    { category: "Electronics", price: 100 },
    { category: "Furniture", price: 300 },
    { category: "Electronics", price: 150 },
    { category: "Clothing", price: 50 },
    { category: "Electronics", price: 200 }
];

console.log(products.filter(product => product.category === 'Electronics'))

//filter + function
const books = [
    { title: "Book A", year: 2005 },
    { title: "Book B", year: 2015 },
    { title: "Book C", year: 2018 },
    { title: "Book D", year: 2008 },
    { title: "Book E", year: 2012 }
]

function filterRecentBooks(array){
    return array.filter(book => book.year > 2010)
}
console.log(filterRecentBooks(books))

//////
const orders = [
    { status: "completed", amount: 150 },
    { status: "pending", amount: 80 },
    { status: "completed", amount: 90 },
    { status: "completed", amount: 200 },
    { status: "shipped", amount: 120 },
    { status: "completed", amount: 50 }
];

function filterLargeCompletedOrders(array){
  return array.filter(order => order.status === 'completed' && order.amount > 100)
}
console.log(filterLargeCompletedOrders(orders))

//filter + function ()
const employees = [
    { name: "Alice", department: "Engineering", salary: 6000 },
    { name: "Bob", department: "Marketing", salary: 4000 },
    { name: "Charlie", department: "Engineering", salary: 7000 },
    { name: "Alice", department: "Engineering", salary: 5000 },
    { name: "David", department: "Marketing", salary: 5500 },
    { name: "Eve", department: "Engineering", salary: 6000 },
    { name: "Frank", department: "HR", salary: 4500 }
]

function filterHighEarnersByDepartment(employees, depart ){
  return employees
  .filter(employee => employee.department === depart && employee.salary > 5000)
  .map(employee => employee.name)
  .filter((name,index,self)=> self.indexOf(name) === index)
}
console.log(filterHighEarnersByDepartment(employees, 'Engineering'))