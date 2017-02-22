import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[];

  constructor() {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies = [
      { name: 'Company 1', email: 'email 1', phone: 123 },
      { name: 'Company 2', email: 'email 2', phone: 123 }
    ];
  }

}
