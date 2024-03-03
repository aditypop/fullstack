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
organizations :Organization[] = [];
organization :any;
designation:any;
submited:boolean=false;
isEdit:boolean=false;
// submitedmyDesignationForm:boolean=false;
constructor(private FormBuilder:FormBuilder,private organizationservice:OrganizationService,
  // private designationservice:DesignationService
  ){
  this.myForm = this.FormBuilder.group({
    'name':['',Validators.required],
    'id':[]
  })
//  this.myDesignationForm =  this.FormBuilder.group({
//     'organization':['',Validators.required],
//     'designation':['',Validators.required]

//   });
  this.organizationservice.getOrganizations().subscribe(organizations => {
    this.organizations = organizations;
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
    if(!this.isEdit) {
      this.saveOrganization();
    } else if(this.isEdit) {
      this.updateOrganization(this.myForm.value.id, this.myForm.value);
    }
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

saveOrganization() {
  this.organizationservice.addOrganization({ id:'', name: this.myForm.value?.name }).subscribe(() => {
    this.submited = false;
    this.myForm.reset();
    this.getAllOrganizations();
  });
}

deleteOrganization(id: number): void {
  this.organizationservice.deleteOrganization(id).subscribe(() => {
    this.getAllOrganizations();
  });
}

editOrganization(id: number): void {
  this.organizationservice.getOrganization(id).subscribe((organization) => {
    this.myForm.patchValue({
      'name': organization.name,
      'id': organization.id
    });
    this.isEdit = true;
  });
}

updateOrganization(id: number, organization: Organization): void {
  this.organizationservice.updateOrganization(id, organization).subscribe(() => {
    this.isEdit = false;
    this.submited =false;
    this.myForm.reset();
    this.getAllOrganizations();
  });
}

getAllOrganizations() {
  this.organizationservice.getOrganizations().subscribe(organizations => {
    this.organizations = organizations;
  });
}
}
