import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBindindComponent } from './template-bindind.component';

describe('TemplateBindindComponent', () => {
  let component: TemplateBindindComponent;
  let fixture: ComponentFixture<TemplateBindindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBindindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateBindindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
