import { Component, OnInit } from '@angular/core';

import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent extends FieldType implements OnInit {

  templateConfig: any;
  number:string = 'number';
  ngOnInit() {
    var defaultValidators = [
      {
        name: 'phone',
        pattern: '^[0-9]{3}-[0-9]{3}-[0-9]{4}$',
        placeholder: 'xxx-xxx-xxxx',
        validationMsg: 'Invalid Phone Number. Expected Format : xxx-xxx-xxxx'
      },
      {
        name: 'phone-extension',
        pattern: '^([1][-])?[0-9]{3}-[0-9]{3}-[0-9]{4}(([x,X][0-9]{4,5})?)$',
        placeholder: '(1-)xxx-xxx-xxxx(x/X)(xxxx/xxxxx)',
        validationMsg: '\"Invalid Phone Number. Expected' +
          'Format: (1-)xxx-xxx-xxxx(x/X)(xxxx/xxxxx)\"'
      },
      {
        name: 'zip',
        pattern: '^[0-9]{5}(?:[-\s][0-9]{4})?$',
        placeholder: 'xxxxx-xxxx',
        validationMsg: 'Invalid Zip. Expected Format : xxxxx-xxxx'
      },
      {
        name: 'email',
        pattern: '^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$',
        placeholder: 'username@domain.com',
        validationMsg: 'Invalid Email Address'
      },
      {
        name: 'ip-address',
        pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?' +
          '[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]' +
          '|[01]?[0-9][0-9]?)$',
        placeholder: '255.255.255.255',
        validationMsg: 'Invalid IP-Adress'
      },
      {
        name: 'integer',
        pattern: '^[0-9]*$',
        validationMsg: 'Invalid Number'
      },
      {
        name: 'url',
        pattern: '^https?:\/\/',
        placeholder: 'http(s)://',
        validationMsg: 'Invalid URL'
      },
      {
        name: 'price',
        pattern: '^\\d+(\.\\d{1,2})?$',
        placeholder: '',
        validationMsg: 'Invalid Price. Expected Format xx.xx'
      }
    ];

    var errorMessage = {
      missingRegex: 'ep-text: please specify "regex" in ' +
        'template options when "validator" equals custom.',
      missingValidators: 'Could not find the following validators in the list: '
    };

    this.templateConfig = {
      defaultValidators: defaultValidators,
      errorMessage: errorMessage
    };

    var validationExpression;
    if (this.field.templateOptions.validator) {
      validationExpression = this.getValidationExpression();
    }
  }
  getValidationExpression() {
    var valPattern;
    var validator = this.templateConfig.defaultValidators.filter(item =>
      item.name === this.field.templateOptions.validator.toLowerCase())
    if (this.field.templateOptions.validator.toLowerCase() === 'custom') {
      if (this.field.templateOptions.regex) {
        console.log(this.templateConfig.errorMessage.missingRegex);
      }
      valPattern = this.field.templateOptions.regex;
    } else if (!validator ||
      validator == null || validator.length === 0) {
      console.log(this.templateConfig.errorMessage.missingValidators +
        this.field.templateOptions.validator);
      console.log(this.templateConfig.defaultValidators);
    } else {
      valPattern = validator[0].pattern;
      this.field.templateOptions.placeholder = this.field.templateOptions.placeholder ||
        validator[0].placeholder;
      this.setDefaultValidationMessage(validator[0]);

    }
    return valPattern;
  }
  setDefaultValidationMessage(validator) {
    if (!this.field.templateOptions.validationMsg &&
      !this.field.validation || (this.field.validation && !this.field.validation.messages)) {
      this.field.templateOptions.pattern = validator.pattern;
      this.field.templateOptions.validationMsg = validator.validationMsg;
    }
  }


  onBlur($event) {
    console.log($event);
  }

}
