import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JobDetails } from 'src/models/contact';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
contactForm : FormGroup;

jobOpenings = ['Designer', 'Product Manager','Content Writer', 'Developer']
empStatuses = ['Student','Employed','Unemployed','Other']
expe = ['yes','no']
  constructor() {
    this.contactForm= this.createFormGroup();
   }
   createFormGroup(){
    return new FormGroup({
      jobOpening: new FormControl(),
      empStatus : new FormControl(),
      experience: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email : new FormControl()
    })
  }
  onSubmit(){
    const result: JobDetails = Object.assign({}, this.contactForm.value);
    console.log(result);
  }
  ngOnInit() {
  }


}
