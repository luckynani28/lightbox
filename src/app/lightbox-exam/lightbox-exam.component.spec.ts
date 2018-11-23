import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxExamComponent } from './lightbox-exam.component';

describe('LightboxExamComponent', () => {
  let component: LightboxExamComponent;
  let fixture: ComponentFixture<LightboxExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightboxExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightboxExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
