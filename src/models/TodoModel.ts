class TodoModel{
    rowSerial: number;
    rowDescription: string;
    rowAssigned: string;

    constructor(rowSerial: number, rowDescription: string, rowAssigned: string){
        this.rowSerial = rowSerial;
        this.rowDescription = rowDescription;
        this.rowAssigned = rowAssigned;
    }
}