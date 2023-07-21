import { Component } from '@angular/core';
import{FormBuilder, FormGroup } from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dash board.model';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent {
  [x: string]: any;

  formValue !: FormGroup; 
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData ! : any;
  
  
  private err: any;
  constructor(private formbuilder: FormBuilder,
    private api: ApiService) { } 
   

  ngOnInit(): void{
    this.formValue = this.formbuilder.group({
      firstName :[''],
      lastName :[''],
      age :[''],
      desgination :[''],
      salary :['']
    })
    this.getAllEmployee();

  }
  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.age = this.formValue.value.age;
    this.employeeModelObj.desgination = this.formValue.value.desgination;
    this.employeeModelObj.salary = this.formValue.value.salary;

    
    this.api.postEmployee(this.employeeModelObj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("Employee Added Successfully")
      let ref = document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
      err => {
      alert("Something went wrong");
    });
    }
    getAllEmployee(){
      this.api.getEmployee()
      .subscribe(res=>{
        this.employeeData = res;
      })
    }
    deleteEmployee(row : any){
      this.api.deleteEmployee(row.id)
      .subscribe(res=>{
        alert("Employee Deleted");
        this.getAllEmployee();
      })
    }
  }

  

