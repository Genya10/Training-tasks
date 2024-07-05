class T01 {
  private _n1: number = 44;
  private _n2: number = 77;
  public access: boolean = false;
  public token: number = 123;
  constructor(a: boolean, b: number) {
    (this.access = a), (this.token = b);
  }
  public get n1(): number {
    return this.access ? this._n1 : 0;
  }
}

export const obj1 = new T01(true, 10);
console.log(obj1.access);
