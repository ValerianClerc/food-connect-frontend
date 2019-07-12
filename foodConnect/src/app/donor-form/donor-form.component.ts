import { Component } from '@angular/core';
import { Donor } from '../donor';
import axios from 'axios';
import {AxiosInstance} from 'axios';
 
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

  donor = new Donor('', '', '', '', '', '', []);

  confirmPassword(){
    if (this.donor.password === this.passwordConfirmationTxt){
      this.passwordConfirmationFailed = false;
    }
    else{
      this.passwordConfirmationFailed = true;
    }
  }

  onSubmit() {
    
    console.log('Name: ' + this.donor.orgName + ', Email: ' + this.donor.email + ', Password: ' + this.donor.password  + ', Organization: ' + this.donor.orgType);
  
    /* try {
      axios.post('http://localhost:3000/signupdonor', this.donor)
      .then(resp => {
        console.log(resp)
        return
      })
      .catch(err => {
        console.log(err)
        return
      })
    } catch (error) {
      console.error(error)
    } */
  }

}
