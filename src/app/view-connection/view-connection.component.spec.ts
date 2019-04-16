import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConnectionComponent } from './view-connection.component';

describe('ViewConnectionComponent', () => {
  let component: ViewConnectionComponent;
  let fixture: ComponentFixture<ViewConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
