import { Component, OnInit, ViewChild } from '@angular/core';
import swal from'sweetalert2';

export interface Email {
  name: string;
  email_address: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {



  public info;
  public data: Email = {
    name: '',
    email_address: '',
    subject: '',
    message: ''
  }

  constructor() {
    this.info = JSON.parse(localStorage.getItem('contactPage')); 
    console.log(this.info); 
   }

  ngOnInit() {
  }

  sendEmail(){
    swal('Procesando!!', '...Loading', 'info');

    if(this.data.message){    

      const URLAPI = 'https://api.emailjs.com/api/v1.0/email/send';

      var request = {
        service_id: 'gmail',
        template_id: 'template_xzJ0BNRI',
        user_id: 'user_Wxq9azpMlVJ8jPM7SXVme',
        template_params: {
            'from_name': this.data.name,
            'message_html': `
              Subject: ${this.data.subject} <br>
              Email del cliente: ${this.data.email_address} <br><br>
              ${this.data.message}
            `,
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
          }
        };

        fetch(URLAPI, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(request), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(response =>  swal('Message sent correctly!!', 'Your email has been processed correctly in a maximum of 48hr you will be contacted by our technical team.', 'success'))
        .catch(error => swal('Oh, this is a mistake!!', error.message, 'error'))
        
 
    }else{
      swal('Oh, this is a mistake!!', 'You must enter all the required information...', 'error');
    }

  }
 //swal('Message sent correctly!!', 'Your email has been processed correctly in a maximum of 48hr you will be contacted by our technical team.', 'success')


}
