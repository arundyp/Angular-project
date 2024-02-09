import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {

  }
 
  employee: Employee[] = [];
  emp:Employee= new Employee();

  ngOnInit() {
    
    this.getEmpData();

    this.resetFormData();
  }
  getEmpData() {
    debugger;
    this.employeeService.getAllEmp().subscribe(data => {
      this.employee = data;
      console.log(this.employee);

    });
  }


  createEmployee(){
    debugger;
    this.employeeService.createEmp(this.emp).subscribe(data=>{
      //alert('Record added sucessfully..');
     this.resetFormData();
   
    },
    error=>{
      alert('Something went wrong please try again....');
    }
    
    );
  }

 


  deleteEmp(id:any){
    debugger;
    this.employeeService.deleteEmpData(id).subscribe(data=>{
      this.emp=data;
      this.getEmpData();
    })
  }


  resetFormData(){
    this.emp.id=0;
    this.emp.name ='';
    this.emp.mobile ='';
    this.emp.email ='';
    this.emp.address='';
    this.emp.pincode='';
    this.emp.state='';
    this.emp.bankName='';
    this.emp.ifsc='';
    this.emp.city='';

  }


  updateEmployee(){
    debugger;
    this.employeeService.createEmp(this.emp).subscribe(data=>{
      //alert('Record added sucessfully..');
     this.resetFormData();
     this.getEmpData();
    },
    error=>{
      alert('Something went wrong please try again....');
    }
    
    );
  }


  updateEmp(id:any){
    debugger;
    this.employeeService.updateEmpData(id).subscribe(data=>{
    this.emp=data;
    this.getEmpData();
    })

  }




}
