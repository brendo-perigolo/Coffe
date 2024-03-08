import { Component, Input, inject } from "@angular/core";
import { TituloFormComponent } from "../../shared/forms/titulo-form/titulo-form.component";
import { CommonModule } from "@angular/common";

import { Router, RouterOutlet } from "@angular/router";

import { routes } from "../../../app.routes";
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";
import { Titulo_Interface } from "../../../Model/titulo-Interface";
import { TituloGlobalService } from "../../../service/titulo/titulo-global.service";
import { TituloGridComponent } from "../../shared/grid/titulo-grid/titulo-grid.component";
import { ReceitaEnvButtonComponent } from "../../shared/button/receita-env-button/receita-env-button.component";

@Component({
  selector: "app-receita",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TituloFormComponent,
    ToolbarComponent,
    TituloGridComponent,
    ReceitaEnvButtonComponent,
    ToolbarComponent
  ],
  templateUrl: "./receita.component.html",
  styleUrl: "./receita.component.css",
})
export class ReceitaComponent {
  titulos: Titulo_Interface[] = [];

  @Input() tipo: number = 0;

  private trs = inject(TituloGlobalService);

  data: any;

  buscarReceita() {
    this.trs.buscarTitulo(this.tipo).subscribe((res) => {
      return (this.data = res);
    });
  }

  ngOnInit() {
    this.buscarReceita();
  }
}
