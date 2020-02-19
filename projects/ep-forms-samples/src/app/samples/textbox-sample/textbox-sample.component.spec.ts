import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxSampleComponent } from './textbox-sample.component';

describe('TextboxSampleComponent', () => {
  let component: TextboxSampleComponent;
  let fixture: ComponentFixture<TextboxSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
