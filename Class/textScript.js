class Text {
    constructor(selector) {
        this.$elem = document.querySelector(selector);
    }

    change(size) {
        if (this.$elem) {
            this.$elem.style.fontSize = size + 'px';
        } else {
            console.error('Element not found');
        }
    }
}

class TextId extends Text {
    constructor(options) {
        super(options.selector);
        this.change(options.size); 
        this.$elem.style.color = options.color; 
    }
}

const textId = new TextId({
    selector: '#text',
    size: 32,
    color: 'red'
});