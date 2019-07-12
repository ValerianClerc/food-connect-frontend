import { Component} from '@angular/core';
import { Recipient } from '../recipient';
import axios from 'axios';
import {AxiosInstance} from 'axios';




@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.component.html',
  styleUrls: ['./recipient-form.component.scss']
})
export class RecipientFormComponent{

  title = '';
  passwordConfirmationFailed = false;
  passwordConfirmationTxt = '';


  recipient = new Recipient('', '', '', '', '', 0, '', '', '', '', '', '');

  confirmPassword(){
    if (this.recipient.password === this.passwordConfirmationTxt){
      this.passwordConfirmationFailed = false;
    }
    else{
      this.passwordConfirmationFailed = true;
    }
  }

  onSubmit() {
    /* (async () => {
      const response = await axios({
        url: 'http://localhost:3000/',
        method: 'get'
      })
    
      console.log(response)
    })()
 */
    console.log('Name: ' + this.recipient.name + ', Email: ' + this.recipient.email + ', Password: ' + this.recipient.password  + ', Organization: ' + this.recipient.organization + ', Emergency Contact: ' + this.recipient.emergencyContact 
    + ', Emergency Number: ' + this.recipient.emergencyNumber + ', Size: ' + this.recipient.orgSize + ', Times: ' + this.recipient.times + ', WishList: ' + this.recipient.wishList);
    
    /* try {
      return axios.post('http://localhost:3000/signup', this.recipient)
    } catch (error) {
      console.error(error)
    } */
  }

}
