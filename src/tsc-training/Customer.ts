/* class Customer {
    firstName : string;
    lastName : string;
    
}

let myCustomer = new Customer();
myCustomer.firstName = 'MD ASHIK';
myCustomer.lastName = 'ALI KHAN';

console.log(myCustomer); */

export class CutomerV1{
    /* private _firstName: string;
    
    private _lastName: string; */
    

    constructor(private _firstName : string, private _lastName : string){
        
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

