import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { FieldType } from '@ngx-formly/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-message',
  templateUrl: './custom-message.component.html',
  styleUrls: ['./custom-message.component.css']
})
export class CustomMessageComponent extends FieldType implements OnInit {

  @ViewChild('fieldComponent', { read: ViewContainerRef, static: false }) fieldComponent: ViewContainerRef;

  ngOnInit() {
  }

}
