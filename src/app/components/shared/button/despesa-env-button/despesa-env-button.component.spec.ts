import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaEnvButtonComponent } from './despesa-env-button.component';

describe('DespesaEnvButtonComponent', () => {
  let component: DespesaEnvButtonComponent;
  let fixture: ComponentFixture<DespesaEnvButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespesaEnvButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DespesaEnvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
