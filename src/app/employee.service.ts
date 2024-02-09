import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }


  getAllEmp():Observable<any>{
    return this.httpClient.get('http://localhost:8082/emp/all');
  }


  createEmp(employee:Employee):Observable<Employee>{
    return this.httpClient.post('http://localhost:8082/emp/data',employee);
  }


  updateEmpData(id:any){
   return this.httpClient.get('http://localhost:8082/emp/'+id);
  }

  deleteEmpData(id:any){
  return this.httpClient.delete('http://localhost:8082/emp/data/'+id);

}


updateEmp(employee:Employee):Observable<Employee>{
  return this.httpClient.put('http://localhost:8082/emp/data/update/',employee);
}


}
