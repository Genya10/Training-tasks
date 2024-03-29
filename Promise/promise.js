///////////////////////////////
async function getId() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos/5')
  console.log(resp);
  const get = await resp.json()
  console.log(get)
}
getId()

/////////////////////////////
const listPromise = fetch('https://api.sampleapis.com/countries/countries')
.then(data => data.json())
.then(countries =>{
console.log(countries)
})
.catch(error => console.log(error))

console.log("LA-LA-LA")