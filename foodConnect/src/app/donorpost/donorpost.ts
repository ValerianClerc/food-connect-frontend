export class DonorPost{
  constructor(
    public pickupAddress: string,
    public foodType: string,
    public foodDesc: string,
    public consumable: string,
    public allergenInfo: string,
    public foodWeight: number,
    public foodValue: number,
    public reasonForDonation: string,
    public pickupTime: string,
    public foodInspected: boolean,
    public orgID: string,
    public created: string,
    public expirationDate: string,
  ){}
}
