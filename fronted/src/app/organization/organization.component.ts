import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganizationService } from '../service/organization.service';
 import { Organization } from '../model/organization.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit{
myForm:FormGroup;
// myDesignationForm:FormGroup;
organization :Organization[] = [];
designation:any;
submited:boolean=false;
// submitedmyDesignationForm:boolean=false;
constructor(private FormBuilder:FormBuilder,private organizationservice:OrganizationService,
  // private designationservice:DesignationService
  ){
  this.myForm = this.FormBuilder.group({
    'name':['',Validators.required]
  })
//  this.myDesignationForm =  this.FormBuilder.group({
//     'organization':['',Validators.required],
//     'designation':['',Validators.required]

//   });
  this.organizationservice.getOrganizations().subscribe(organizations => {
    this.organization = organizations;
  });
//  this.designationservice.getDesignations().subscribe(designation=>{
//   this.designation = designation;
//   });

}
ngOnInit(): void {

}
onSubmit(){
  this.submited =true;
  if(this.myForm.valid){
    this.organizationservice.addOrganization({ id:'', name: this.myForm.value?.name }).subscribe(() => {
      this.organizationservice.getOrganizations().subscribe(organizations => {
        this.organization = organizations;
        console.log('New organization id:', organizations);

      });
      this.submited = false;
      this.myForm.reset();
    });
    // this.organization = this.organizationservice.addOrganization({id:2,name:this.myForm.value?.name});
    this.submited =false;
    this.myForm.reset();
  }
}
// onDesignationSubmit(){
//   this.submitedmyDesignationForm =true;
//   if(this.myDesignationForm.valid){
//     // this.designation = this.designationservice.addOrganization({id:2,name:this.myDesignationForm.value?.organization,designation:this.myDesignationForm.value?.designation});
//      this.submitedmyDesignationForm =false;
//     this.myDesignationForm.reset();
//   }
// }



deleteOrganization(id: number): void {
  this.organizationservice.deleteOrganization(id).subscribe(() => {
    this.organizationservice.getOrganizations().subscribe(organizations => {
      this.organization = organizations;
    });
  });
}
}
