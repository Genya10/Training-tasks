////////////////////////////////////
const handleNumber = (number)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(number);
    },1000)
  })
}

handleNumber(32)
.then(result => {
    console.log('Promise resolved, number:', result)
})
.catch(error => {
    console.error('Happened error:',error);
})

//////////////////////////////
const usersDatabase = {
    "john_doe": { id: 1, name: "John Doe" },
    "jane_smith": { id: 2, name: "Jane Smith" },
    "admin": { id: 3, name: "Admin" }
};

const findUser=(username)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user = usersDatabase[username];
            if(user){
                resolve('User founded')
            }else{
                reject('User not found')
            }
        },1000)
    })
}

findUser('admin')
.then(result =>{
    console.log(result);
})
.catch(error => {
    console.error(error);
})

//////////////////////
async function  fetchUserData(userId){
   return fetch(`https://jsonplaceholder.typicode.com/users/{userId}`)
   .then(response =>{
    if(!response.ok){
        throw new Error('Error load')
    }
    return response.json();
   })
}
const userId = 1;
fetchUserData(userId)
.then(userId=>{
    console.log('Data about user:',userData);
})
.catch(error=>{
    console.error('Happened error:', error)
})