import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Organization } from '../model/organization.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }




  private apiUrl = 'http://localhost:8000/api';


  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.apiUrl+'/organizations');
  }

  getOrganization(id: number): Observable<Organization> {
    return this.http.get<Organization>(this.apiUrl+'/organization'+id);
  }

  addOrganization(organization: Organization): Observable<Organization> {
    return this.http.post<Organization>(this.apiUrl+'/organization', organization);
  }

  updateOrganization(id: number, organization: Organization): Observable<Organization> {
    return this.http.put<Organization>(this.apiUrl+'/organization/'+id, organization);
  }

  deleteOrganization(id: number): Observable<any> {
    return this.http.delete(this.apiUrl+'/organization/'+id);
  }
}
