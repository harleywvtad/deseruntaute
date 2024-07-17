class MyClass {
    private _base: any;

    constructor(base: any) {
        this._base = base;
    }

    public get base(): any {
        return this._base;
    }
}

let instance = new MyClass(new CustomAnimation());
let baseValue = instance.base; // Accessing the getter method to retrieve the value
