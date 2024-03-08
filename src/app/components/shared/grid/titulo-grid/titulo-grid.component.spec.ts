import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloGridComponent } from './titulo-grid.component';

describe('TituloGridComponent', () => {
  let component: TituloGridComponent;
  let fixture: ComponentFixture<TituloGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TituloGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
