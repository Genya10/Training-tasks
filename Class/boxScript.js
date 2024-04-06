class Component {
    constructor(selector){
        this.$elem = document.querySelector(selector)
    }

    show(){
     this.$elem.style.display = 'block'
    }
    
    hide(){
     this.$elem.style.display = 'none'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$elem.style.width = this.$elem.style.height = options.size + 'px'
        this.$elem.style.backgroundColor = options.color
    }
}

const box1 = new Box({
    selector:'#box1',
    size: 150,
    color:'blue'
})

const box2 = new Box({
    selector:'#box2',
    size: 200,
    color:'yellow'
})

class Circle extends Box {
    constructor(options){
        super(options)

        this.$elem.style.borderRadius = '50%'
        this.$elem.style.marginTop = '30px'
        this.$elem.style.textAlign = 'center'
    }
}

const circle = new Circle({
    selector:'#circle',
    size:'250',
    color:'green'
})