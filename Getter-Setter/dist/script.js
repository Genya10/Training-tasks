class T01 {
    constructor(a, b) {
        this._n1 = 44;
        this._n2 = 77;
        this.access = false;
        this.token = 123;
        (this.access = a), (this.token = b);
    }
    get n1() {
        return this.access ? this._n1 : 0;
    }
}
export const obj1 = new T01(true, 10);
console.log(obj1.access);
