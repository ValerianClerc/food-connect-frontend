import { Component } from '@angular/core';
import { Donor } from '../donor';
 
@Component({
  selector: 'app-donor-form',
  templateUrl: './donor-form.component.html',
  styleUrls: ['./donor-form.component.scss']
})
export class DonorFormComponent {

  title = '';
  passwordConfirmationFailed = false;
  passwordConfirmationTxt = '';

  organizations = ['Grocery Store', 'Restaurant', 'Bakery', 'Commercial Cafeteria'];

  donor = new Donor('', '', '', '', '', '', '', '');

  confirmPassword(){
    if (this.donor.password === this.passwordConfirmationTxt){
      this.passwordConfirmationFailed = false;
    }
    else{
      this.passwordConfirmationFailed = true;
    }
  }

  onSubmit() {
    console.log('Name: ' + this.donor.name + ', Email: ' + this.donor.email + ', Password: ' + this.donor.password  + ', Organization: ' + this.donor.organization + ', Emergency Contact: ' + this.donor.emergencyContact, + ', Emergency Number: ' + this.donor.emergencyNumber);
  }

}
