import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesonItemComponent } from './peson-item.component';

describe('PesonItemComponent', () => {
  let component: PesonItemComponent;
  let fixture: ComponentFixture<PesonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
