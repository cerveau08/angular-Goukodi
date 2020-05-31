import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnvoieComponent } from './list-envoie.component';

describe('ListEnvoieComponent', () => {
  let component: ListEnvoieComponent;
  let fixture: ComponentFixture<ListEnvoieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnvoieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnvoieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
