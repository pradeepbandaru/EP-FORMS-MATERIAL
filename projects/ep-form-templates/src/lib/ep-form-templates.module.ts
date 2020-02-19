import { NgModule } from '@angular/core';
import { EpFormTemplatesComponent } from './ep-form-templates.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomMessageComponent } from './templates/wrappers/custom-message/custom-message.component';
import { LabelWrapperComponent } from './templates/wrappers/label-wrapper/label-wrapper.component';
import { TextboxComponent } from './templates/textbox/textbox.component';
@NgModule({
  declarations: [
    EpFormTemplatesComponent,
    CustomMessageComponent,
    LabelWrapperComponent,
    TextboxComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [
        {
          name: 'label',
          component: LabelWrapperComponent
        },
        {
          name: 'error',
          component: CustomMessageComponent
        }
      ],
      types: [
        {
          name: "ep-text",
          component: TextboxComponent,
          wrappers: ["error"]
        }
      ],
      validationMessages: [
        {
          name: 'required',
          message: (error, field: FormlyFieldConfig) => `${field.templateOptions.label} is required`
        }
      ]
    }),
    MatInputModule,
    MatFormFieldModule,
    FormlyMaterialModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports: [EpFormTemplatesComponent]
})
export class EpFormTemplatesModule { }
