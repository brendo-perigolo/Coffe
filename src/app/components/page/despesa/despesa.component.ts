import { Component, inject } from '@angular/core';
import { TituloFormComponent } from '../../shared/forms/titulo-form/titulo-form.component';
import { CommonModule } from '@angular/common';
import { Titulo_Interface } from '../../../Model/titulo-Interface';
import { TituloGlobalService } from '../../../service/titulo/titulo-global.service';
import { TituloGridComponent } from '../../shared/grid/titulo-grid/titulo-grid.component';
import { DespesaEnvButtonComponent } from '../../shared/button/despesa-env-button/despesa-env-button.component';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [TituloFormComponent , CommonModule , TituloGridComponent , DespesaEnvButtonComponent , ToolbarComponent],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.css'
})
export class DespesaComponent {
 
 private TituloService = inject (TituloGlobalService)

 tituloDespesas : Titulo_Interface[] =[];
 
 ngOnInit(){
  this.TituloService
  .buscarTituloPorTipo(1)
  .subscribe((titulos)=>{
    this.tituloDespesas = titulos;
  })
 }

}


