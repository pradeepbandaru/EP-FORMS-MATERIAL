import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpFormTemplatesComponent } from './ep-form-templates.component';

describe('EpFormTemplatesComponent', () => {
  let component: EpFormTemplatesComponent;
  let fixture: ComponentFixture<EpFormTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpFormTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpFormTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
