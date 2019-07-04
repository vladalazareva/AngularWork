import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipShowcaseComponent } from './tooltip-showcase.component';

describe('TooltipShowcaseComponent', () => {
  let component: TooltipShowcaseComponent;
  let fixture: ComponentFixture<TooltipShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
