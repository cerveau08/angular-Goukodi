import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireDepotComponent } from './faire-depot.component';

describe('FaireDepotComponent', () => {
  let component: FaireDepotComponent;
  let fixture: ComponentFixture<FaireDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaireDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaireDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
