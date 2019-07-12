export class Donor {
    constructor (
        public email: string,
        public password: string,
        public orgName: string,
        public address: string,
        public orgType: string,
        public commercialID: string,
        //public emergencyContact: string,
        //public emergencyNumber: string,
        public posts: []
    ) {}
}
