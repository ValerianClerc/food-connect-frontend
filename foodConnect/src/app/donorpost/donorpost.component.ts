import { Component, OnInit } from '@angular/core';
import { DonorPost } from './donorpost';
@Component({
  selector: 'app-donorpost',
  templateUrl: './donorpost.component.html',
  styleUrls: ['./donorpost.component.scss']
})
export class DonorpostComponent {
  donorpost = new DonorPost('','','','', '', 0,0,'','',false,'','','');
  onSubmit(){
    console.log(this.donorpost.pickupAddress+'\n'+
    this.donorpost.foodType+'\n'
    +this.donorpost.foodDesc+'\n'
    +this.donorpost.consumable+'\n'
    +this.donorpost.allergenInfo+'\n'
    +this.donorpost.foodWeight+'\n'
    +this.donorpost.foodValue+'\n'
    +this.donorpost.reasonForDonation+'\n'
    +this.donorpost.pickupTime+'\n'
    +this.donorpost.foodInspected+'\n'
    +this.donorpost.allergenInfo+'\n');
  }

}
