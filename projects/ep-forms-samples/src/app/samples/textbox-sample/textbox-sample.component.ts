import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textbox-sample',
  templateUrl: './textbox-sample.component.html',
  styleUrls: ['./textbox-sample.component.css']
})
export class TextboxSampleComponent implements OnInit {

  constructor() { }
  form = new FormGroup({});
  model: any = {
    'Phone': '222-222-2222'
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      id: "phone",
      key: 'Phone',
      type: 'ep-text',
      templateOptions: {
        label: 'Phone',
        placeholder: 'xxx-xxx-xxxx',
        required: true,
        pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}'
      },
      validation: {
        messages: {
          required: (error, field: FormlyFieldConfig) => `${field.templateOptions.label} is required`,
          pattern: (error, field: FormlyFieldConfig) => ` Invalid ${field.templateOptions.label} Expected Format : ${field.templateOptions.placeholder}`
        }
      }
    },
    {
      template: '<br>',
    },
    {
      id: 'zip',
      key: 'zip',
      type: 'ep-text',
      templateOptions: {
        label: 'Zip',
        placeholder: 'xxxxx-xxxx',
        required: true,
        pattern: '[0-9]{5}-[0-9]{4}'
      },
      validation: {
        messages: {
          required: (error, field: FormlyFieldConfig) => `${field.templateOptions.label} is required`,
          pattern: (error, field: FormlyFieldConfig) => ` Invalid ${field.templateOptions.label} Expected Format : ${field.templateOptions.placeholder}`
        }
      }
    },
    {
      template: '<br>',
    },
    {
      id: 'email',
      key: 'email',
      type: 'ep-text',
      templateOptions: {
        label: 'Email',
        placeholder: 'username@domain.com',
        required: true
      },
    },
    {
      template: '<br>',
    },
    {
      id: 'url',
      key: 'url',
      type: 'ep-text',
      templateOptions: {
        label: 'Url',
        placeholder: 'https://',
        required: true
      },
    },
    {
      template: '<br>',
    },
    {
      id: 'ip',
      key: 'ip',
      type: 'ep-text',
      templateOptions: {
        label: 'IP Address',
        placeholder: '255.255.255.259',
        required: true,
        validator: 'ip-address'
      },
    },
    {
      template: '<br>',
    },
    {
      id: 'price',
      key: 'price',
      type: 'ep-text',
      templateOptions: {
        label: 'Price',
        placeholder: 'xx.xx',
      },
    },
    {
      template: '<br>',
    },
    {
      id: 'CustomZip',
      key: 'CustomZip',
      type: 'ep-text',
      templateOptions: {
        label: 'Custom Zip',
        placeholder: 'xxxxx-xxxx',
        required: true
      },
    },
    {
      template: '<br>',
    },
    {
      id: 'any',
      key: 'any',
      type: 'ep-text',
      templateOptions: {
        label: 'Any Text',
        required: true
      },
    },
    {
      template: '<br>',
    },
    {
      id: 'decimal',
      key: 'decimal',
      type: 'ep-text',
      templateOptions: {
        label: 'No Of Decimals',
      },
    }
  ];
  ngOnInit() {
  }

}
