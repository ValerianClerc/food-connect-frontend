export class Donor {
    constructor (
        public name: string,
        public email: string,
        public password: string,
        public organization: string,
        public address: string,
        public commercialId: string,
        public emergencyContact: string,
        public emergencyNumber: string
    ) {}
}
