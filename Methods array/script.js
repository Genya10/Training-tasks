//find sum of numbers
let array1 = [12,21,9,5,12,36];
let array1Reduce = array1.reduce((accum,item)=>{
    return accum += item;
});
console.log(array1Reduce);

///find the largest number
let array2 = [8,-3,25,18,7,54,41,7];
let array2Reduce = array2.reduce((accum,item)=>{
    if(item > accum){
        accum = item;
    }
    return accum;
})
console.log(array2Reduce);

//find all positive number and add their
let array3 = [22,51,-8,10,-5,30,-1,9];
let array3Reduce = array3.reduce((accum,item)=>{
    if(item > 0){
     accum += item;
    }
    return accum;
});
console.log(array3Reduce);

//////////////////////////////
let arr = [];
let array3Reduce2 = array3.reduce((accum,item)=>{
    if(item > 0){
     arr.push(item)
    }
},0);
console.log(arr)