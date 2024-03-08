import { Component, Input, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ReceitaComponent } from "../receita/receita.component";
import { TituloFormComponent } from "../../shared/forms/titulo-form/titulo-form.component";
import { NavBarComponent } from "../../shared/nav-bar/nav-bar.component";
import { DespesaComponent } from "../despesa/despesa.component";
import { CommonModule } from "@angular/common";
import { ReceitaEnvButtonComponent } from "../../shared/button/receita-env-button/receita-env-button.component";
import { DespesaEnvButtonComponent } from "../../shared/button/despesa-env-button/despesa-env-button.component";
import { FooterComponent } from "../../shared/footer/footer/footer.component";
import { ToolbarComponent } from "../../shared/toolbar/toolbar.component";

import { receitaModel } from "../../../Model/receita-model";
import { Subject, Subscription, takeUntil } from "rxjs";
import { MatSidenavModule } from "@angular/material/sidenav";
import { TituloGridComponent } from "../../shared/grid/titulo-grid/titulo-grid.component";
import { Titulo_Interface } from "../../../Model/titulo-Interface";
import { TituloGlobalService } from "../../../service/titulo/titulo-global.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    RouterOutlet,

    TituloFormComponent,
    NavBarComponent,
    CommonModule,
    ReceitaEnvButtonComponent,
    DespesaEnvButtonComponent,
    FooterComponent,
    ToolbarComponent,
    MatSidenavModule,

    TituloGridComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  titulos: Titulo_Interface[] = [];
  tituloService = inject(TituloGlobalService);
  assinado$ = new Subject<void>();

  @Input() tipo: number = 0;

  ngOnInit(): void {
    // this.tituloService.dadosAtualizados$.subscribe((dados) => {
    //   console.log(dados);
    //   this.atualizaTotais(dados);
    // });

    this.tituloService.dadosAtualizados$
    .pipe(takeUntil(this.assinado$))
    .subscribe((dados)=>{
      console.log(dados);
     this.atualizaTotais(dados);
    })



    this.tituloService.atualizarDados();
  }

  private calcularTotaisporTipo(dados: any[], tipo: number): number {
    const valoresFiltrado = dados
      .filter((item) => item.tipo === tipo)
      .map((item) => item.valor);
    if (valoresFiltrado.length === 0) {
      return 0;
    }
    const total = valoresFiltrado.reduce((acc, curr) => acc + curr, 0);
    return total;
  }

  totalReceita: number = 0;
  totalDespesa: number = 0;
  saldoFinal: number = 1;

  formatarNumero(numero: number): string {
    const partes = numero.toFixed(2).split(".");
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return partes.join(",");
  }

  private atualizaTotais(dados: any[]) {
    this.totalDespesa = this.calcularTotaisporTipo(dados, 1);
    this.totalReceita = this.calcularTotaisporTipo(dados, 0);
    this.saldoFinal = this.totalReceita - this.totalDespesa;
  }

  ngOnDestroy() {}
}
