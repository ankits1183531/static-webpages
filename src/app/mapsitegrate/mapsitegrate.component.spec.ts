import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsitegrateComponent } from './mapsitegrate.component';

describe('MapsitegrateComponent', () => {
  let component: MapsitegrateComponent;
  let fixture: ComponentFixture<MapsitegrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsitegrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsitegrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
