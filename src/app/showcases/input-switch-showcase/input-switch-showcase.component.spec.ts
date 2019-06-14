import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSwitchShowcaseComponent } from './input-switch-showcase.component';

describe('InputSwitchShowcaseComponent', () => {
  let component: InputSwitchShowcaseComponent;
  let fixture: ComponentFixture<InputSwitchShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSwitchShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSwitchShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
