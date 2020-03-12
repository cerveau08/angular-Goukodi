import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptePartenaireExistentComponent } from './compte-partenaire-existent.component';

describe('ComptePartenaireExistentComponent', () => {
  let component: ComptePartenaireExistentComponent;
  let fixture: ComponentFixture<ComptePartenaireExistentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptePartenaireExistentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptePartenaireExistentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
