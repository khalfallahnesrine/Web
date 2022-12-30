import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorierComponent } from './factorier.component';

describe('FactorierComponent', () => {
  let component: FactorierComponent;
  let fixture: ComponentFixture<FactorierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactorierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
