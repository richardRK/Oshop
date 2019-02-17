import { Component } from '@angular/core';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = 'Simple Example Contact-us page using Angular 4';
  public data:any=[]
 
  
  constructor(){
  }
 
  // save(name, email, mobile, subject, message): void {
  //   this.data['name']= name;
  //               this.data['email']= email;
  //               this.data['mobile']= mobile;
  //               this.data['subject']= subject;
  //               this.data['message']= message;
  //   console.log(this.data);
  //               //add request to send email or into mysql
  //               this.http.put<any>('http://localhost/api/v1/update/', this.data).subscribe(
  //       res => {
  //         console.log(res);
  //     },
  //     (err: HttpErrorResponse) => {
  //       if (err.error instanceof Error) {
  //         console.log("Client-side error occured.");
  //       } else {
  //         console.log("Server-side error occurred.");
  //       }
  //     });
  //  }
  
}
