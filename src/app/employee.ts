import { Injectable } from "@angular/core";

@Injectable()
export class Employee {
     id?:number;
	 name ?:string;
	 mobile ?:string;
	 email ?:string;
	 address?:string;
	 pincode?:string;
	 state?:string;
	 bankName?:string;
	 ifsc?:string;
     city?:string;

     constructor(){

       this.id=0;
	 this.name ='';
	 this.mobile ='';
	 this.email ='';
	this.address='';
	 this.pincode='';
	 this.state='';
	 this.bankName='';
	 this.ifsc='';
     this.city='';

     }




     
}
