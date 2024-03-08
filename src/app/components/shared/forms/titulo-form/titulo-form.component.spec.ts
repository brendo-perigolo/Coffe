import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloFormComponent } from './titulo-form.component';

describe('TituloFormComponent', () => {
  let component: TituloFormComponent;
  let fixture: ComponentFixture<TituloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TituloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
