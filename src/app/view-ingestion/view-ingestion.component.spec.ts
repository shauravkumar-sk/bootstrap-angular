import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIngestionComponent } from './view-ingestion.component';

describe('ViewIngestionComponent', () => {
  let component: ViewIngestionComponent;
  let fixture: ComponentFixture<ViewIngestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIngestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
