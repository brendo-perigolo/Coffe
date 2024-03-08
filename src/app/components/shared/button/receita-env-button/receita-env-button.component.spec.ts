import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaEnvButtonComponent } from './receita-env-button.component';

describe('ReceitaEnvButtonComponent', () => {
  let component: ReceitaEnvButtonComponent;
  let fixture: ComponentFixture<ReceitaEnvButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceitaEnvButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceitaEnvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
