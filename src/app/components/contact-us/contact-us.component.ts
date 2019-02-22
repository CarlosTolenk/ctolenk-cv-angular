import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

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

  public data: Email = {
    name: '',
    email_address: '',
    subject: '',
    message: ''
  }

  constructor() { }

  ngOnInit() {
  }


  proccessData(){
    console.log("Validando");
    console.log(this.data);
    this.sendEmail();
  }

  sendEmail(){
   const URLAPI = 'https://api.emailjs.com/api/v1.0/email/send';

   var data = {
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
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => alert('Your mail is sent!'))
    .catch(error => alert('Oops... ' + JSON.stringify(error)));
  }


}
