import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecdashComponent } from './recdash.component';

describe('RecdashComponent', () => {
  let component: RecdashComponent;
  let fixture: ComponentFixture<RecdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
