import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-label-wrapper',
  templateUrl: './label-wrapper.component.html',
  styleUrls: ['./label-wrapper.component.css']
})
export class LabelWrapperComponent extends FieldWrapper implements OnInit {
  @ViewChild('fieldComponent', { read: ViewContainerRef, static: false }) fieldComponent: ViewContainerRef;
  ngOnInit() {
  }

}
