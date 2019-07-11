import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDirectiveShowcaseComponent } from './tooltip-directive-showcase.component';

describe('TooltipDirectiveShowcaseComponent', () => {
  let component: TooltipDirectiveShowcaseComponent;
  let fixture: ComponentFixture<TooltipDirectiveShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDirectiveShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDirectiveShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
