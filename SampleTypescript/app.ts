 export namespace X {
 export class test {
     private _n : string;
    constructor(name : string) {
        this._n = name;
    }

     get n() : string{
        return this._n;
    }
    set n(a: string) {
        this._n = a;
    }
}
 }


