import { Component, inject } from '@angular/core';
import { CategoriaGridComponent } from '../../shared/grid/categoria-grid/categoria-grid.component';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { CategoriaServiceService } from '../../../service/categoria/categoria-service.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CategoriaGridComponent , NavBarComponent , ToolbarComponent],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  private categoriaService = inject (CategoriaServiceService);

  deletar(){
    this.categoriaService.delete
  }
}
