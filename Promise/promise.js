///////////////////////////////
/*async function getId() {
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

console.log("LA-LA-LA");*/

/////////////////////////
/*const coffee = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve('Coffffeeeee....')
     reject(Error('Coffee is done!'))
    },2000)    
});

coffee.then(data=>{
    console.log(data)
}).catch(error=>console.log(error));*/

///////////////////////////////////////////
/*const family = [
    { member: 'mother', id: 1, coffee: 'Latte' },
    { member: 'father', id: 2, coffee: 'Espresso' },
    { member: 'son', id: 3, coffee: 'Cappucino' },
]

const getCoffee =(member)=>{
 const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
 return coffeePromise
 .then(data => data.json())
 .then(list=>{
    console.log('list:',list)
    const coffee = list.find(res => res.title === member.coffee)
    console.log(coffee)
    return {
        ...member,
        coffee:coffee
    }
 })
}

const getMember = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const member = family.find(res => res.id === id)
            if (member) {
                resolve(member)
            } else {
                reject(Error('Member is not find!'))
            }
        }, 1500)
    })
}

getMember(2)
.then(data=>{
   return getCoffee(data);
})
.then(newMember => {
    console.log('newMember > ', newMember)
})
.catch(error => console.log(error))*/

///////////////////////////////////////////
const makeCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Your coffee is ready!')
        }, 1000)
    })
}

const makeToast = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Your toast is ready!')
        }, 2000)
    })
}

const coffeeReady = makeCoffee();
const toastReady = makeToast();

/*coffeeReady.then(data=>{
    console.log(data)
});
toastReady.then(data=>{
    console.log(data)
})*/

Promise.all([coffeeReady, toastReady]).then(data => {
    console.log(data)
})

Promise.all([coffeeReady, toastReady])
    .then(([coffeeReady, toastReady]) => {
        console.log(coffeeReady, toastReady)
    })

////////////////////////////////////
const beersPromise = fetch('https://api.sampleapis.com/beers/ale');
const winePromise = fetch('https://api.sampleapis.com/wines/reds');

Promise.all([beersPromise, winePromise])
    .then(data => Promise.all(data.map(res => res.json())))
    .then(finalData => {
        console.log(finalData)
    })
