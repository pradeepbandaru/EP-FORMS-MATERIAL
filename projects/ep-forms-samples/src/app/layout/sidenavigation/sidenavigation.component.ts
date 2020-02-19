import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
// import {matNavList} from '@angular/material/list'

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {

  constructor(public _router: Router) { }

  components = [
    'Contact',
    'Dealer Profile',
    'Advance Search',
    'Auto Complete List',
    'Button',
    'Calendar Enroll Dates',
    'Checkbox',
    'Check List',
    'CKEditor',
    'Collapse Expand',
    'Context Button',
    'DataTable',
    'Date Picker',
    'Editable Select',
    'File Upload',
    'Filter Button',
    'Generic CRUD',
    'Grid',
    'Hours',
    'Label',
    'Masked Input',
    'Multi Select',
    'Pick List',
    'Radio',
    'Searchable Dropdown',
    'Select',
    'Switch',
    'Tabs',
    'Textbox',
    'Text Area'
  ]
  ngOnInit() {
  }
  openComponent(item) {
    this._router.navigate([item]);
  }
}
