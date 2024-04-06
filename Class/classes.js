class Animal {
    constructor(options){
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
        //this.color = options.color
        }
        voice(){
            console.log('I am animal!')
        }
        static whos(){
            console.log('Who is this?')
        }
    
}

const animal = new Animal({
    name:'Bobik',
    age:12,
    hasTail: true
})
console.log(animal)

class Dog extends Animal{
    constructor(options){
        super(options)
            this.color = options.color
            this.eyes = options.eyes
    }
}

const dog = new Dog({
    name:'Tusik',
    age:9,
    hasTail:false,
    color:'gray',
    eyes:'blue'
})
console.log(dog)

class Building {
    constructor(build){
        this.home = build.home
        this.floor = build.floor
    }
    timeBuild(){
        console.log('Time build')
    }
}

class Home extends Building {
    constructor(build){
        super(build)
        this.home = build.home
        this.floor = build.floor
        this.color = build.color
    }
}

const home = new Home({
    home:'Mall',
    floor: 4,
    color:'Blue'
})
console.log(home)

