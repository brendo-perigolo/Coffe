import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { CategoriaServiceService } from "../../../../service/categoria/categoria-service.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Categoria } from "../../../../Model/categoria-model";

@Component({
  selector: "app-categoria-form",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./categoria-form.component.html",
  styleUrl: "./categoria-form.component.css",
})
export class CategoriaFormComponent {
  private catService = inject(CategoriaServiceService);

  @Output() categoriaCriada = new EventEmitter<void>();

  destCategoria: string = "";

  criar() {
    if (this.destCategoria !== "") {
      
    const novaCategoria: Categoria = {
      descricao: this.destCategoria,
    };

    this.catService.criar(novaCategoria).subscribe(() => {
      this.destCategoria = "";
      this.categoriaCriada.emit();
    });
    }else{
      alert('ERRO ao cadastrar categoria , descricao nula')
    }

  }
}
