import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesPartsComponent } from './les-parts.component';

describe('LesPartsComponent', () => {
  let component: LesPartsComponent;
  let fixture: ComponentFixture<LesPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
