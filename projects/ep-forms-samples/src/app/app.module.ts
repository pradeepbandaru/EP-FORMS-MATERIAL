import { BrowserModule } from '@angular/platform-browser';
import { EpFormTemplatesModule } from '../../../ep-form-templates/src/lib/ep-form-templates.module';
import {MatListModule} from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavigationComponent } from './layout/sidenavigation/sidenavigation.component';
import { TextboxSampleComponent } from './samples/textbox-sample/textbox-sample.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavigationComponent,
    TextboxSampleComponent
  ],
  imports: [
    EpFormTemplatesModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
