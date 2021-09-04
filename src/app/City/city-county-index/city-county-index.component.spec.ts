import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCountyIndexComponent } from './city-county-index.component';

describe('CityCountyIndexComponent', () => {
  let component: CityCountyIndexComponent;
  let fixture: ComponentFixture<CityCountyIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCountyIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCountyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
