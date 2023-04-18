export class Client {
    id : any;
    sharedKey: string;
    businessId: string;
    email: string;
    phone: string;
    startDate: Date;
    endDate: Date;

    constructor(sharedKey: string, businessId: string, email: string, phone: string, startDate: Date,endDate: Date) {
        this.sharedKey = sharedKey;
        this.businessId = businessId;
        this.email = email;
        this.phone = phone;
        this.startDate = new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDay());
        this.endDate = new Date(endDate.getFullYear(),endDate.getMonth(),endDate.getDay());
    }
}