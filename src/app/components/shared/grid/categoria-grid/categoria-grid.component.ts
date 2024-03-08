import { Component, inject } from '@angular/core';
import { CategoriaServiceService } from '../../../../service/categoria/categoria-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria-grid.component.html',
  styleUrl: './categoria-grid.component.css'
})
export class CategoriaGridComponent {

  private cs = inject (CategoriaServiceService);
  
  categoria : any
  
  buscarDados (){
    this.cs.buscar().subscribe((res)=>{
      this.categoria = res;
    })
  }


  ngOnInit(){
    this.buscarDados()
   }
}
