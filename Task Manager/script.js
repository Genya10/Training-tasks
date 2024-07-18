let data ={
    "t-123":{
        "title":"Button",
        "description":"1kg, black",
        "status":"new"
    },
    "t-124":{
        "title":"Toy car",
        "description":"count:2",
        "status":"done"
    },
    "t-125":{
        "title":"Pears",
        "description":"2kg, green",
        "status":"new"
    },
}

const tasksBlockNew = document.querySelector('.tasks-blocks_new');
const tasksBlockInProgress = document.querySelector('.tasks-blocks_in-progress');
const tasksBlockDone = document.querySelector('.tasks-blocks_done');

function initial (){
    for(const dataId in data){
        const task = document.createElement('div');
        task.classList.add('task');
        task.getAttribute('data-id',dataId)

        const h = document.createElement('h4');
        h.textContent = data[dataId].title;
        task.append(h);
    }
}
