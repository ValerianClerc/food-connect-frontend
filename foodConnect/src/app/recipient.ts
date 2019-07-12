export class Recipient {
    constructor (
        public name: string,
        public email: string,
        public password: string,
        public organization: string,
        public address: string,
        public orgSize: number,
        public commercialId: string,
        public emergencyContact: string,
        public emergencyNumber: string,
        public times: string,
        public itemTypes: string,
        public wishList: string
    ) {}
}